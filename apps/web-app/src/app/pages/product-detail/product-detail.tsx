'use client';
import { toast, Toaster } from 'react-hot-toast';
import { PlusIcon, HeartIcon } from '@code-dudes/fashion-ecommerce/icon';
import { Button } from '@code-dudes/fashion-ecommerce/ui-kit';
import _ from 'lodash';
import { ImageGroup } from './image-group';
import { ProductVariation } from './product-variation';
import { useSearchParams } from 'next/navigation';
import { ProductInnerDetail } from './product-inner-detail';
import { useEffect, useState } from 'react';
import { postShoppingItem, updateCartItem } from 'apps/web-app/lib/db';
import { useMutation, useQuery } from '@tanstack/react-query';
import { getQueryClient } from 'apps/web-app/src/app/get-query-client';
import { getData } from 'apps/web-app/src/app/getData';
export const ProductDetail = ({
  product,
  colors,
  images,
  care,
  userId,
}: {
  product: modules.BProduct[];
  colors: string[];
  images: string[];
  care: { description: string; icon: string }[];
  userId: string | undefined;
}) => {
  const queryClient = getQueryClient();
  const { data, error, isSuccess } = useQuery({
    queryKey: ['cart', userId],
    queryFn: () => getData({ cartId: userId || '' }),
  });
  const [picture, setPicture] = useState(0);
  const searchParams = useSearchParams();

  const variation =
    Number(searchParams.get('variation')) || product[0]?.product_variant_id;
  const productIndex = product.find((ar) => ar.product_variant_id == variation);
  const color = productIndex?.color_name;
  const product_variation = _.uniqBy(product, 'product_variant_id');
  const som = data?.find((item) => item.product_variant_id === variation);
  const { mutate: updateItem } = useMutation({
    mutationKey: ['cart', userId],

    mutationFn: updateCartItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart', userId] });
      if (Number(som?.qty) >= 0 && Number(som?.qty) < 1) {
        toast('product add successfully to your bag', {
          duration: 1000,
          position: 'top-center',
        });
      }
    },
  });

  const { mutate: insertItem } = useMutation({
    mutationKey: ['cart', userId],

    mutationFn: postShoppingItem,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['cart', userId] });
      toast('product add successfully to your bag', {
        duration: 5000,
        position: 'top-center',
      });
    },
  });
  const totalQty = product_variation.reduce((per, ar) => per + ar.stock, 0);
  useEffect(() => {
    setPicture(images.findIndex((arr) => arr === productIndex?.image));
  }, [color]);

  if (
    product.length > 0 &&
    product.find((ar) => ar.product_variant_id === variation)
  )
    return (
      <div className="w-page h-[1549px]">
        <Toaster />
        <ImageGroup images={images} picture={picture} setPicture={setPicture} />
        <ProductVariation
          variation={variation}
          product={product}
          colors={colors}
        />
        <Button
          className="w-full justify-between  pl-4 pr-[34px] h-14"
          onClick={() => {
            if (totalQty > 0) {
              if (som) {
                updateItem({ qty: Number(som.qty) + 1, id: Number(som.id) });
              } else {
                insertItem({
                  user_id: userId,
                  productVariant: variation,
                });
              }
            }
          }}
        >
          {totalQty > 0 ? (
            <>
              <div className="flex gap-[7.81px]">
                <PlusIcon className="w-5 h-5 fill-none" />
                Add to basket
              </div>
              <HeartIcon className="w-6 h-6 fill-none" />
            </>
          ) : (
            <p className="text-center w-full">Out of stock</p>
          )}
        </Button>
        <ProductInnerDetail care={care} product={product} />
      </div>
    );
  return <div>404 nothing found</div>;
};
