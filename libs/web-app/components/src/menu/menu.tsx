'use client';

import {
  CloseIcon,
  DownIcon,
  MenuIcon,
  SeparatorIcon,
} from '@code-dudes/fashion-ecommerce/icon';
import { cn } from '@code-dudes/fashion-ecommerce/ui-kit';
import React, { ComponentRef, useRef, useState } from 'react';

export const Menu: React.FC = () => {
  const ref = useRef<ComponentRef<'dialog'>>(null);
  const [active, setActive] = useState(0);
  const menu: { [key: string]: string[] } = {
    New: ['a', 'b'],
    Apparel: [
      'outer',
      'dress',
      'blouse/shirt',
      't-shirt',
      'knitwear',
      'skirt',
      'pants',
      'denim',
      'kids',
    ],
    Bag: ['a', 'b', 'c'],
    Shoes: ['a', 'b'],
    Beauty: ['a', 'b'],
    Accessories: ['a', 'b'],
  };

  return (
    <div className=" ">
      <button
        onClick={() => {
          ref.current?.showModal();
          document.body.classList.replace('h-full', 'h-[100vh]');
          document.body.classList.replace('overflow-x-clip', 'overflow-hidden');
        }}
        className="w-[24px] h-[25px] ml-[16px] text-[#14142b] outline-none "
      >
        <MenuIcon />
      </button>
      <dialog
        ref={ref}
        onCancel={() => {
          ref.current?.close();
          document.body.classList.remove('h-[100vh] overflow-hidden');
        }}
        className={cn(
          ' bg-white  min-w-full min-h-[100vh] max-h-full overflow-x-hidden   menu'
        )}
      >
        <button
          onClick={() => {
            ref.current?.close();
            document.body.classList.replace('h-[100vh]', 'h-full');
            document.body.classList.replace(
              'overflow-hidden',
              'overflow-x-clip'
            );
          }}
          className="mt-[10px] ml-4"
        >
          <CloseIcon className="w-6 h-6 text-[#333333]" />
        </button>
        <div
          className="w-page inline-flex gap-[53px]  text-body uppercase text-[14px]/[34.5px] tracking-[3px] ml-[19px]
        mt-5 *:cursor-pointer
        "
        >
          <p
            onClick={() => setActive(0)}
            className={active ? 'opacity-50' : ''}
          >
            women
          </p>
          <p
            onClick={() => setActive(1)}
            className={active != 1 ? 'opacity-50' : ''}
          >
            man
          </p>
          <p
            onClick={() => setActive(2)}
            className={active != 2 ? 'opacity-50' : ''}
          >
            kid
          </p>
        </div>
        <div className="w-page px-5 relative mt-[3.85px] ">
          <SeparatorIcon
            className={cn(
              'absolute top-0 text-secondary w-[71px]',
              active == 1 ? 'ml-[116px]' : active == 2 && 'ml-52'
            )}
          />
          <p className="bg-[#3333] h-[1px] opacity-20 w-3/4 absolute top-[5px]" />
        </div>
        <div className="flex flex-col ml-[17.58px] mt-[19.77px] text-body text-[16px]/[48.5px]">
          {Object.keys(menu).map((ar) => (
            <div key={ar} className="flex-col flex overflow-y-auto">
              <input
                type="checkbox"
                className=" peer hidden select-none"
                id={ar}
              />
              <label
                htmlFor={ar}
                id="checkbox"
                className="peer cursor-pointer select-none peer-checked:first-child:rotate-180   justify-between flex items-center  "
              >
                {ar}
                <DownIcon className="fill-none mr-[41.42px] " />
              </label>

              <div className="hidden ml-9 peer-checked:inline-block">
                {menu[ar].map((arr) => (
                  <div key={arr}>{arr}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </dialog>
    </div>
  );
};
