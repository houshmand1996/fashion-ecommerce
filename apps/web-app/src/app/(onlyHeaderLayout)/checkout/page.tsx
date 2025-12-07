import { getShipping } from 'apps/web-app/lib/db';
import { Checkout } from 'apps/web-app/src/app/pages/checkout';
const page = async () => {
  const shippingMethod = (await getShipping()) as
    | modules.shippingMethod[]
    | null;

  return <Checkout shipping={shippingMethod} />;
};
export default page;
