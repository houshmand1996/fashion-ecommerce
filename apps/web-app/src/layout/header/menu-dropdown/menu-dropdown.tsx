'use client';
import useSWR from 'next';
import {
  SeparatorIcon,
  MenuIcon,
  DownIcon,
  CallIcon,
  LocationIcon,
  TwitterIcon,
  InstagramIcon,
  YouTubeIcon,
} from '@code-dudes/fashion-ecommerce/icon';
import { cn, DialogClose } from '@code-dudes/fashion-ecommerce/ui-kit';
import { Dropdown } from '@code-dudes/fashion-ecommerce/web-app/components';
import { useEffect, useState } from 'react';
import { menuServer } from 'apps/web-app/lib/db';
import Link from 'next/link';

const MenuDropdown = () => {
  const res = async () => {
    const res = await menuServer();
    setMenu(res);
  };
  const gender = ['women', 'men', 'kid'];
  const [active, setActive] = useState(0);
  const [isClose, setISclose] = useState(false);
  const [menu, setMenu] = useState<{ [key: string]: string[] } | null>(null);
  useEffect(() => {
    res();
  }, []);
  useEffect(() => {
    document.body.classList.replace('overflow-hidden', 'overflow-x-clip');
  }, [isClose]);

  return (
    <Dropdown
      triggerChildren={<MenuIcon className="w-6 h-6 ml-4 text-[#14142b]" />}
    >
      <div
        className="w-page inline-flex gap-[53px]  text-body uppercase text-[14px]/[34.5px] tracking-[3px] ml-[19px]
        mt-5 *:cursor-pointer
        "
      >
        {gender.map((ar, i) => (
          <p
            key={ar}
            className={active != i ? 'opacity-50' : ''}
            onClick={() => {
              setActive(i);
            }}
          >
            {ar}
          </p>
        ))}
        {/* <p onClick={() => setActive(0)} className={active ? 'opacity-50' : ''}>
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
        </p> */}
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
        {menu &&
          Object.keys(menu).map((ar) => (
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

              <div className="hidden ml-9 peer-checked:flex flex-col ">
                {menu[ar].map((arr) => (
                  <DialogClose key={arr} asChild className="justify-start">
                    <Link
                      href={'/search/' + gender[active] + '/' + ar + '/' + arr}
                      className="w-full"
                      onClick={() => setISclose(true)}
                    >
                      {arr}
                    </Link>
                  </DialogClose>
                ))}
              </div>
            </div>
          ))}
      </div>
      <div
        id="contact"
        className="ml-[18.32px] mt-[32.15px] flex flex-col items-start gap-[15.61px]"
      >
        <div
          id="customer service"
          className="inline-flex justify-center items-center gap-4"
        >
          <CallIcon className="h-6 w-6 fill-none" />
          <p className="text-label text-4/[34.5px] tracking-[1.28px] ">
            (786) 713-8616
          </p>
        </div>
        <div
          id="store locator"
          className="inline-flex justify-center items-center gap-4 normal-case"
        >
          <LocationIcon className="h-6 w-6 fill-none" />
          <p className="text-label text-4/[34.5px]">Store locator</p>
        </div>
      </div>
      <div className="w-full flex justify-center mt-[33px]">
        <SeparatorIcon
          className="w-[124.954px] h-[9.254px]
      text-label"
        />
      </div>
      <div id="social" className="mt-6 w-full flex justify-center  ">
        <div className="w-[142px] h-6 flex gap-[35px] *:h-full *:w-6">
          <TwitterIcon />
          <InstagramIcon />
          <YouTubeIcon />
        </div>
      </div>
    </Dropdown>
  );
};
export default MenuDropdown;
