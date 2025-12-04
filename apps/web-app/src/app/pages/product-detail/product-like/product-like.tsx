import { SeparatorIcon } from '@code-dudes/fashion-ecommerce/icon';
import { GridViewProduct } from '@code-dudes/fashion-ecommerce/web-app/components';
import { getProducts } from 'apps/web-app/lib/db';
import Link from 'next/link';

export const ProductLike = async ({
  category,
  id,
}: {
  category: string;
  id: string;
}) => {
  const product = (await getProducts({
    subCategory: category,
    id,
    limit: 4,
  }).catch((err) => {
    console.log(err);
    return null;
  })) as modules.IProduct[] | null;

  return (
    <div id="productLike" className="pt-5 flex flex-col items-center">
      <p className="title uppercase pt-[33.36px]">You may also like</p>
      <SeparatorIcon className="text-label w-[124.96px] h-[9.26px]" />
      {product && (
        <div className="flex flex-wrap gap-3 pl-4 pr-[17px] pt-[19.9px]">
          {product.map((ar, i) => (
            <Link key={i} href={'/products' + '/' + ar.id}>
              <GridViewProduct
                item={{
                  image: ar.image,
                  description: ar.description,
                  name: ar.name,
                  price: ar.price,
                }}
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
