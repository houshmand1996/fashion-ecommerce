'use client';
import { SeparatorIcon } from '@code-dudes/fashion-ecommerce/icon';
import { cn } from '@code-dudes/fashion-ecommerce/ui-kit';
import { HomePageProduct } from '@code-dudes/fashion-ecommerce/web-app/components';
import Link from 'next/link';
import { useState } from 'react';

export const ProductClient = ({
  getProduct,
}: {
  getProduct: modules.BProduct[] | null;
}) => {
  const [atProduct, setAtProduct] = useState(0);
  const length = getProduct?.length;
  return (
    <div className="w-page h-[531px] relative">
      <p
        className="text-center title uppercase   h-[49.3px]
      pl-[95.5px] pb-[0.746px] pr-[93.5px] mt-[72px]
      "
      >
        Just for You
      </p>
      <SeparatorIcon className="w-[124.96px] h-[9.25px] text-label ml-[125px]" />
      <div
        className={cn(
          ' h-[390px] ml-[16.5px]  mt-[23px] flex gap-[10.57px] overflow-hidden '
        )}
      >
        {getProduct && (
          <>
            <Link href={'/products/' + getProduct[atProduct].id}>
              <HomePageProduct
                className="gap-1 pt-[0.271px] pb-[2.09px] h-[390px] w-[255px] first-child:w-[253px] first-child:h-[311.639px] last-child:w-[235px]
                [&>div>p:first-child]:body-large
                "
                item={getProduct[atProduct]}
              />
            </Link>
            {length && length > atProduct + 1 && (
              <button onClick={() => setAtProduct(atProduct + 1)}>
                <HomePageProduct
                  className="gap-1 pt-[0.271px] pb-[2.09px] h-[390px] w-[255px] first-child:w-[253px] first-child:h-[311.639px] last-child:w-[235px]
                [&>div>p:first-child]:body-large
                "
                  item={getProduct[atProduct + 1]}
                />
              </button>
            )}
          </>
        )}
      </div>
      <div className="flex justify-center gap-[6px] mt-[10px]  items-center w-page">
        {getProduct &&
          getProduct.map((_, i) => (
            <button
              key={i}
              className={cn(
                'border-[0.5px] border-[#888]   rotate-45  h-[5.5px] w-[5.5px] ',
                i == atProduct ? 'bg-[#888]' : ''
              )}
              onClick={() => setAtProduct(i)}
            />
          ))}
      </div>
    </div>
  );
};
