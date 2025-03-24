import { ShoppingBagIcon } from '@code-dudes/fashion-ecommerce/icon';
import { Button, cn } from '@code-dudes/fashion-ecommerce/ui-kit';
import {
  Cart,
  Dropdown,
  ListViewProduct,
} from '@code-dudes/fashion-ecommerce/web-app/components';
import { getCart, getProduct, Product } from 'apps/web-app/lib/db';

type ShoppingCart = Product & {
  quantity: number | string;
};
const CartDropdown = async () => {
  let newProduct: (ShoppingCart | null)[] | null = null;
  const data = await getCart(1);
  let totalPrice: number | null = null;
  if (data) {
    const product = data.products.map(async (ar) => {
      const product = await getProduct(ar.productId);
      return product ? { ...product, quantity: ar.quantity } : null;
    });

    newProduct = await Promise.all(product);
    totalPrice = newProduct
      .filter((ar): ar is ShoppingCart => ar !== null)
      .reduce(
        (total, cur) => total + Number(cur.price) * Number(cur.quantity),
        0
      );
  }

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
            newProduct ? 'title' : 'text-[14px]/[34.5px] tracking-[3px]'
          )}
        >
          cart
        </p>
        <div className=" flex-col flex justify-between h-full flex-1 ">
          {newProduct ? (
            <div className="flex-col flex justify-between h-full flex-1">
              <div className="normal-case ml-4 mt-1 h-[355px] flex flex-col gap-4 overflow-y-scroll">
                {newProduct.map(
                  (ar, index) =>
                    ar &&
                    Number(ar.quantity) > 0 && (
                      <Cart
                        key={index}
                        item={{
                          details: ar.description,
                          image: `${process.env.server}/${ar.image}`,
                          name: ar.name,
                          price: ar.price,
                          quantity: ar.quantity,
                        }}
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
      >
        <ShoppingBagIcon className="w-5 h-5 text-off-white fill-none" />
        {newProduct ? 'BUY NOW' : 'Continue shopping'}
      </Button>
    </Dropdown>
  );
};
export default CartDropdown;
