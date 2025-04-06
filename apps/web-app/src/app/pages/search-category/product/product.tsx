import {
  GridViewProduct,
  ListViewProduct,
} from '@code-dudes/fashion-ecommerce/web-app/components';
import Link from 'next/link';
const iLoveProduct = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
  e.stopPropagation();

  e.preventDefault();
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
  isListView: boolean;
}) => {
  return (
    <div className="flex flex-wrap gap-3 justify-start items-start pl-4 pr-[17px] h-[1542.22px] content-start">
      {item?.map(
        (ar, i) =>
          i < inPage * perPage &&
          i >= inPage * perPage - 10 && (
            <Link href={'/'} key={ar.id}>
              {isListView ? (
                <ListViewProduct
                  iLoveProduct={iLoveProduct}
                  item={{
                    image: process.env['NEXT_PUBLIC_SERVER'] + '/' + ar.image,
                    details: ar.details,
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
                    details: ar.details,
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
