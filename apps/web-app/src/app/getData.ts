import { getCart } from 'apps/web-app/lib/db';

export const getData = async ({ cartId }: { cartId: string }) => {
  const data = (await getCart(cartId)) as modules.IShoppingCart[] | null;

  return data;
};
