'use client';
import { cn, Tag } from '@code-dudes/fashion-ecommerce/ui-kit';
import {
  CloseIcon,
  DownIcon,
  FilterIcon,
  GalleryIcon,
  Group198Icon,
  ListviewIcon,
} from '@code-dudes/fashion-ecommerce/icon';
import { Dispatch, SetStateAction } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
export const Filter = ({
  isListView,
  array,
  setIsListView,
}: {
  isListView: 0 | 1 | 2;
  array?: string[] | number;
  setIsListView: Dispatch<SetStateAction<0 | 1 | 2>>;
}) => {
  const length = array && typeof array !== 'number' && array.length;
  const path = usePathname();
  let p = !!length && array[length - 1];
  return (
    <div
      id="filter"
      className={cn(
        ' w-full flex flex-col',
        isListView > 1
          ? 'gap-[13.89px] pl-[15.8px] pt-[1.89px] pr-4 pb-[11px] mt-3 mb-[5px]'
          : isListView
          ? 'h-10 mt-3 mb-[26px]'
          : 'h-[90px] mt-[17px] mb-[11.18px]  gap-3 '
      )}
    >
      <div
        id="innerFilter"
        className={cn(
          'flex w-full  pr-4 justify-center items-center',
          isListView > 1 ? 'h-[36.212px]' : 'h-10  py-[1.89px] pl-[15.8px]'
        )}
      >
        <div className="w-full flex items-center justify-between">
          <p
            id="lastParam"
            className="text-body text-center text-[14px]/[14.84px] uppercase"
          >
            {p}
          </p>
          <div className="flex">
            <div className="rounded-[33px] bg-opacity-10 bg-[#C4C4C4] w-[72.749px] h-9 flex justify-center items-center">
              <p className="text-label text-center text-[13px]/[13.78px]">
                New
              </p>
              <DownIcon className="w-4 h-4 opacity-50" />
            </div>
            <button
              onClick={() =>
                setIsListView(isListView > 1 ? 0 : ((isListView + 1) as 1 | 2))
              }
              className="w-9 h-9 bg-[#C4C4C4] bg-opacity-10 rounded-full flex items-center justify-center ml-2"
            >
              {isListView > 1 ? (
                <Group198Icon className="w-5 h-5 opacity-50 fill-none" />
              ) : isListView ? (
                <GalleryIcon className="w-5 h-5 opacity-50 fill-none" />
              ) : (
                <ListviewIcon className="w-5 h-5 opacity-50 fill-none" />
              )}
            </button>
            <div className="w-9 h-9 bg-[#C4C4C4] bg-opacity-10 flex items-center justify-center rounded-full ml-[9px]">
              <FilterIcon className="w-5 h-5 text-secondary" />
            </div>
          </div>
        </div>
      </div>
      {!(isListView == 1) && (
        <div
          id="tag"
          className={cn(
            'flex  ',
            isListView > 1 ? 'gap-2 ' : 'gap-[7px] pl-[17px]'
          )}
        >
          {typeof array !== 'number' &&
            length &&
            array?.map(
              (ar, i) =>
                i < length - 1 && (
                  <Tag key={i} className="items-center">
                    {ar}
                    <Link className="" href={path.replace('/' + ar, '')}>
                      <CloseIcon className="w-4 h-4" />
                    </Link>
                  </Tag>
                )
            )}
        </div>
      )}
    </div>
  );
};
