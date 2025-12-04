import { getRandomProducts } from 'apps/web-app/lib/db';
import { ProductClient } from './product-client/';
export const Product = async () => {
  const getProduct = (await getRandomProducts({ limit: 5 })) as
    | modules.BProduct[]
    | null;

  return <ProductClient getProduct={getProduct} />;
};
