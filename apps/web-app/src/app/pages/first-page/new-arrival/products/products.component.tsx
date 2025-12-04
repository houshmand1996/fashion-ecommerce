'use client';
import { HomePageProduct } from '@code-dudes/fashion-ecommerce/web-app/components';
import { useQuery } from '@tanstack/react-query';
import { getProducts, getProductsLike } from 'apps/web-app/lib/db';
import Link from 'next/link';
import { useEffect } from 'react';
export const Products = ({ category }: { category?: string }) => {
  const { data, error, isSuccess } = useQuery({
    queryKey: [category, 'newArrival'],
    queryFn: async () =>
      (await getProductsLike({
        limit: 4,
        category:
          category && category !== 'All'
            ? category === 'Tshirt'
              ? 't-shirt'
              : category
            : null,
        subCategory:
          category && category !== 'All'
            ? category === 'Tshirt'
              ? 't-shirt'
              : category
            : null,
      })) as modules.BProduct[] | null,
  });
  useEffect(() => {
    console.log(category, data);
  }, [category, data]);

  return (
    <div className="mt-[6.95px] mx-4 flex gap-[13px] flex-wrap">
      {isSuccess &&
        data &&
        data.map((ar, i) => (
          <Link key={i} href={'/products/' + ar.id}>
            <HomePageProduct className="gap-1 pb-[0.156px]" item={ar} />
          </Link>
        ))}
    </div>
  );
};
