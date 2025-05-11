import { FC, Suspense } from 'react';
import { LayoutType } from '../../../layout';
import { ProductLike } from '../../../pages/product-detail/product-like';
import { getProduct } from 'apps/web-app/lib/db';

const layout: FC<LayoutType & { params: { id: string } }> = async ({
  children,
  params,
}) => {
  const product = (await getProduct({ id: params.id }).catch((er) => {
    console.log(er);
    return null;
  })) as modules.BProduct[] | null;

  return (
    <>
      {children}
      <Suspense fallback={<p>it a fallback</p>}>
        {product && product.length > 0 && (
          <ProductLike
            category={product[0].subCategory || product[0].category}
            id={params.id}
          />
        )}
      </Suspense>
    </>
  );
};
export default layout;
