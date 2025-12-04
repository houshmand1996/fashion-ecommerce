'use client';
import { Dispatch, FC, SetStateAction, useEffect } from 'react';

import { TextComponent } from './text-component';
import { cn } from '@code-dudes/fashion-ecommerce/ui-kit';
import { classNameType } from '../../../pages.type';
import Link from 'next/link';

type TabType = classNameType & {
  category: string;
  setCategory: Dispatch<SetStateAction<string>>;
};
export const Tab: FC<TabType> = ({ className, category, setCategory }) => {
  const tabLink = ['All', 'Apparel', 'Dress', 'Tshirt', 'bag'];
  useEffect(() => {
    setCategory(tabLink[0]);
  }, []);
  return (
    <div
      id="tab"
      className={cn(
        'w-page h-9 flex-shrink-0 flex  justify-center items-center gap-[26px]',
        className
      )}
    >
      {tabLink.map((ar) => (
        <button
          id="tabButton"
          className={cn(
            'text-center font-TenorSans text-sm/[14.84px] tracking-[1px] ',
            ar == category ? 'text-[#212806]' : 'text-placeholder opacity-80 '
          )}
          key={ar}
          onClick={() => setCategory(ar)}
        >
          {ar}
        </button>
      ))}
    </div>
  );
};
