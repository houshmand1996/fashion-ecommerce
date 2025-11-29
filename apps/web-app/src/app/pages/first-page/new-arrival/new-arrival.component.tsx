'use client';
import {
  ForwardArrowIcon,
  SeparatorIcon,
} from '@code-dudes/fashion-ecommerce/icon';
import { FC, useState } from 'react';
import { Button, cn } from '@code-dudes/fashion-ecommerce/ui-kit';

import { classNameType } from '../../pages.type';
import { Products } from './products';
import { Tab } from 'apps/web-app/src/app/pages/first-page/new-arrival/tab';
export const NewArrival: FC<classNameType> = ({ className }) => {
  const [category, setCategory] = useState('');
  return (
    <div className={cn('w-page h-[736px] flex-shrink-0', className)}>
      <div
        className="flex w-page pt-[0.42px] pl-[75.2px] pb-[7.75px] pr-[74.2px] flex-col items-center h-[50px]"
        id="title"
      >
        <p className="w-[225.5px] h-[32.6px] text-black text-center title uppercase">
          New Arrival
        </p>
        <SeparatorIcon className="w-[124.96px] h-[9.25] text-label" />
      </div>
      <Tab category={category} setCategory={setCategory} className="" />
      <Products category={category} />
      <Button
        state={'secondary'}
        className="text-center gap-2 p-3 ml-[110px] mt-[27.84px] mb-[15px]"
      >
        Explore More
        <ForwardArrowIcon className="w-[18px] h-[18px] text-[#141428] " />
      </Button>
    </div>
  );
};
