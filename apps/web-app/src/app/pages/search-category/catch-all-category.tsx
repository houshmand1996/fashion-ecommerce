'use client';
import { useEffect, useState } from 'react';
import { Filter } from './filter';
import { Product } from './product';
import { Pagination } from './pagination';
import { DeleteIcon, SearchIcon } from '@code-dudes/fashion-ecommerce/icon';
import { Input } from '@code-dudes/fashion-ecommerce/ui-kit';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebounce } from 'apps/web-app/lib/debounce';

export const CatchAllCategory = ({
  params,
  item,
}: {
  params: {
    category?: string[] | undefined;
  };
  item: modules.IProduct[] | null;
}) => {
  const query = useSearchParams();
  const route = useRouter();
  const array = params.category || item?.length;
  const [inPage, setInPage] = useState(1);
  const [inputValue, setInputValue] = useState(query.get('query') || '');
  const userQuery = useDebounce(inputValue);
  useEffect(() => {
    if (!!userQuery) route.replace(`?query=${userQuery}`);
  }, [userQuery]);

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
      {typeof array === 'number' && (
        <div className="px-4">
          <label className="flex border-b-2 items-center  pt-[17px] gap-[11.93px] ">
            <Input
              type="search"
              placeholder="Search items"
              className="placeholder:text-label placeholder:text-[14px]/[34.5px] text-label text-[16px]/[34.5px] m-0"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button
              onClick={() => setInputValue('')}
              className="inline-flex p-[6px] justify-center items-center gap-[10px] bg-[#f8f8f8] rounded-[25px]"
            >
              <DeleteIcon className="w-4 h-4 text-label" />
            </button>
            <SearchIcon
              className="text-black w-6 h-6
      fill-none"
            />
          </label>
        </div>
      )}
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
