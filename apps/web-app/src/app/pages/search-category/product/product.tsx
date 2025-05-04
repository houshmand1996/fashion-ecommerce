import { cn } from '@code-dudes/fashion-ecommerce/ui-kit';
import {
  FullProduct,
  GridViewProduct,
  ListViewProduct,
} from '@code-dudes/fashion-ecommerce/web-app/components';
import Link from 'next/link';
const iLoveProduct = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
  e.stopPropagation();
  e.preventDefault();
  e.currentTarget.classList.toggle('fill-none');
  e.currentTarget.classList.toggle('fill-blue-400');
};
export const Product = ({
  item,
  inPage,
  perPage,
  isListView,
}: {
  item: modules.IProduct[] | null;
  inPage: number;
  perPage: number;
  isListView: 0 | 1 | 2;
}) => {
  return (
    <div
      className={cn(
        'flex flex-wrap gap-3 justify-start items-start pl-4 pr-[17px]  content-start',
        isListView ? 'h-[2737.22px]' : 'h-[1542.22px]'
      )}
    >
      {item?.map(
        (ar, i) =>
          i < inPage * perPage &&
          i >= inPage * perPage - perPage && (
            <Link href={'/products/' + ar.id} key={ar.id}>
              {isListView > 1 ? (
                <FullProduct
                  item={{
                    image: process.env['NEXT_PUBLIC_SERVER'] + '/' + ar.image,
                    description: ar.description,
                    name: ar.name,
                    price: ar.price,
                  }}
                />
              ) : isListView ? (
                <ListViewProduct
                  iLoveProduct={iLoveProduct}
                  item={{
                    image: process.env['NEXT_PUBLIC_SERVER'] + '/' + ar.image,
                    description: ar.description,
                    name: ar.name,
                    price: ar.price,
                    rating: 1.2,
                  }}
                />
              ) : (
                <GridViewProduct
                  iLoveProduct={iLoveProduct}
                  item={{
                    image: process.env['NEXT_PUBLIC_SERVER'] + '/' + ar.image,
                    description: ar.description,
                    name: ar.name,
                    price: ar.price,
                  }}
                />
              )}
            </Link>
          )
      )}
    </div>
  );
};
