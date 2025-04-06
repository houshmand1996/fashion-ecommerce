'use client';
import { cn, Tag } from '@code-dudes/fashion-ecommerce/ui-kit';
import {
  CloseIcon,
  DownIcon,
  FilterIcon,
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
  isListView: boolean;
  array: string[];
  setIsListView: Dispatch<SetStateAction<boolean>>;
}) => {
  const length = array.length;
  const path = usePathname();
  return (
    <div
      id="filter"
      className={cn(
        ' w-full flex flex-col gap-3 ',
        isListView ? 'h-10 mt-3 mb-[26px]' : 'h-[90px] mt-[17px] mb-[11.18px]'
      )}
    >
      <div
        id="innerFilter"
        className="flex w-full h-10 py-[1.89px] pl-[15.8px] pr-4 justify-center items-center"
      >
        <div className="w-full flex items-center justify-between">
          <p
            id="lastParam"
            className="text-body text-center text-[14px]/[14.84px] uppercase"
          >
            {array[length - 1]}
          </p>
          <div className="flex">
            <div className="rounded-[33px] bg-opacity-10 bg-[#C4C4C4] w-[72.749px] h-9 flex justify-center items-center">
              <p className="text-label text-center text-[13px]/[13.78px]">
                New
              </p>
              <DownIcon className="w-4 h-4 opacity-50" />
            </div>
            <button
              onClick={() => setIsListView(!isListView)}
              className="w-9 h-9 bg-[#C4C4C4] bg-opacity-10 rounded-full flex items-center justify-center ml-2"
            >
              {isListView ? (
                <Group198Icon className="w-5 h-5 opacity-50 fill-none" />
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
      {!isListView && (
        <div id="tag" className="flex pl-[17px] gap-[7px]">
          {array.map(
            (ar, i) =>
              i < length - 1 && (
                <Tag key={i} className="items-center">
                  {ar}
                  <Link
                    className=""
                    href={path.replace('/' + ar, '')}
                    onClick={() => {
                      console.log(path.replace('/' + ar, ''));
                    }}
                  >
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
