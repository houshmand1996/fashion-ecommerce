'use client';
import { ShoppingBagIcon } from '@code-dudes/fashion-ecommerce/icon';
import { Button, cn, DialogClose } from '@code-dudes/fashion-ecommerce/ui-kit';
import {
  Cart,
  Dropdown,
} from '@code-dudes/fashion-ecommerce/web-app/components';
import { getCart, updateCartItem } from 'apps/web-app/lib/db';
import Link from 'next/link';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getData } from 'apps/web-app/src/app/getData';

const CartDropdown = ({ cartId }: { cartId: string }) => {
  const queryClient = useQueryClient();
  const { data } = useQuery({
    queryKey: ['cart', cartId],
    queryFn: async () => await getData({ cartId }),
  });
  const { mutate: updateItem } = useMutation({
    mutationKey: ['cart', cartId],

    mutationFn: updateCartItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart', cartId] });
    },
  });
  const totalPrice = data
    ? data
        .filter((ar) => ar !== null)
        .reduce((total, cur) => total + Number(cur.price) * Number(cur.qty), 0)
    : null;
  const totalQty = data
    ? data
        .filter((ar) => ar !== null)
        .reduce((total, cur) => total + Number(cur.qty), 0)
    : null;
  const isCartEmpty = !(data && data?.length > 0 && totalQty && totalQty > 0);
  return (
    <Dropdown
      triggerChildren={
        <ShoppingBagIcon className=" text-black fill-none h-6 w-6 ml-4" />
      }
      className="h-full flex flex-1 flex-col justify-between"
      dialogClassName="flex-col open:flex "
    >
      <div className="h-full flex-1 flex flex-col">
        <p
          className={cn(
            'ml-[17px] mt-2 text-body uppercase',
            !isCartEmpty ? 'title' : 'text-[14px]/[34.5px] tracking-[3px]'
          )}
        >
          cart
        </p>
        <div className=" flex-col flex justify-between h-full flex-1 ">
          {!isCartEmpty ? (
            <div className="flex-col flex justify-between h-full flex-1">
              <div className="normal-case ml-4 mt-1 h-[355px] flex flex-col gap-4 overflow-y-scroll">
                {data.map(
                  (ar, index) =>
                    ar &&
                    Number(ar.qty) > 0 && (
                      <Cart
                        item={{
                          description: ar.description,
                          image: ar.image,
                          name: ar.name,
                          price: ar.price,
                          quantity: ar.qty,
                          color: ar.color_hex,
                          size: ar.size_name,
                        }}
                        key={index}
                        onclickMinus={() =>
                          updateItem({
                            id: Number(ar.id),
                            qty: Number(ar.qty) - 1,
                          })
                        }
                        onclickPlus={() =>
                          updateItem({
                            id: Number(ar.id),
                            qty: Number(ar.qty) + 1,
                          })
                        }
                      />
                    )
                )}
              </div>
              <div className="h-[133.6px] border-t-[1px] border-opacity-20 border-solid border-black    mt-1 mx-4 pt-[8.7px]">
                <div className="flex justify-between items-center ">
                  <p className="subtitle-medium uppercase">Sub Total</p>
                  <p className="text-[16px]/[34.5px] tracking-[3px] uppercase text-secondary">
                    ${totalPrice}
                  </p>
                </div>
                <p className="body-medium text-placeholder normal-case mr-[34px]">
                  *shipping charges, taxes and discount codes are calculated at
                  the time of accounting.
                </p>
              </div>
            </div>
          ) : (
            <div className="text-placeholder text-center text-[16px]/[20px] flex-1 flex flex-col justify-center items-center normal-case">
              <p>You have no items in your Shopping Bag.</p>
            </div>
          )}
        </div>
      </div>

      <Button
        size={'lg'}
        state={'primary'}
        className="w-full  !leading-[26px] "
        asChild
      >
        {!isCartEmpty ? (
          <DialogClose asChild>
            <Link href={'/checkout'}>
              <ShoppingBagIcon className="w-5 h-5 text-off-white fill-none" />
              BUY NOW
            </Link>
          </DialogClose>
        ) : (
          <DialogClose asChild>
            <Link href={'/'}>
              <ShoppingBagIcon className="w-5 h-5 text-off-white fill-none" />
              Continue shopping
            </Link>
          </DialogClose>
        )}
      </Button>
    </Dropdown>
  );
};
export default CartDropdown;
