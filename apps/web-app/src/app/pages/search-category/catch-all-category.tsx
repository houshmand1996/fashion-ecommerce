'use client';
import { useEffect, useState } from 'react';
import { Filter } from './filter';
import { Product } from './product';
import { Pagination } from './pagination';

export const CatchAllCategory = ({
  params,
  item,
}: {
  params: { category: string[] };
  item: modules.IProduct[] | null;
}) => {
  const array = params.category;
  const [inPage, setInPage] = useState(1);

  const [isListView, setIsListView] = useState<0 | 1 | 2>(0);
  const perPage = isListView > 1 ? 5 : 10;
  const page = item ? Math.ceil(item.length / perPage) : 1;
  const pageInArray = Array(page)
    .fill(0)
    .map((_ar, index) => index + 1);

  useEffect(() => {
    if (!document) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [inPage]);
  return (
    <>
      <Filter
        array={array}
        isListView={isListView}
        setIsListView={setIsListView}
      />
      <Product
        inPage={inPage}
        isListView={isListView}
        item={item}
        perPage={perPage}
      />
      <Pagination
        inPage={inPage}
        page={page}
        pageInArray={pageInArray}
        setInPage={setInPage}
      />
    </>
  );
};
