import { getShipping } from 'apps/web-app/lib/db';
import { Checkout } from 'apps/web-app/src/app/pages/checkout';
export type ShippingType = { shippingName: string; cost: string }[] | null;
const page = async () => {
  const shipping = (await getShipping()) as ShippingType;

  return <Checkout shipping={shipping} />;
};
export default page;
