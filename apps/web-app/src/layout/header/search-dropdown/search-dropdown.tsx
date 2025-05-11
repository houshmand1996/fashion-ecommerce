'use client';
import {
  CloseIcon,
  DeleteIcon,
  SearchIcon,
} from '@code-dudes/fashion-ecommerce/icon';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
  Input,
} from '@code-dudes/fashion-ecommerce/ui-kit';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useRef, useState } from 'react';

const SearchDropdown = () => {
  const [inputValue, setInputValue] = useState('');
  const popularTrend = [
    'Trend',
    'Dress',
    'Bag',
    'Tshirt',
    'Beauty',
    'Accessories',
  ];
  const route = useRouter();
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <Dialog
      onKeyDown={(e) => {
        if (e.key === 'enter' || e.key === 'Enter') {
          e.preventDefault();

          dialogRef.current?.close();
          route.push('/search?query=' + inputValue);
        }
      }}
    >
      <DialogTrigger className="h-full" state={'default'} size={'default'}>
        <SearchIcon
          className="text-black w-6 h-6
          ml-[67.92px] fill-none"
        />
      </DialogTrigger>
      <DialogContent
        className="min-w-full min-h-full pl-4 pr-[45px]"
        ref={dialogRef}
      >
        <label className="flex border-b-2 items-center  pt-[17px] gap-[11.93px] ">
          <SearchIcon
            className="text-black w-6 h-6
          fill-none"
          />
          <Input
            type="search"
            placeholder="Search items"
            className="placeholder:text-label placeholder:text-[14px]/[34.5px] text-label text-[16px]/[34.5px] m-0"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button onClick={() => setInputValue('')}>
            <DeleteIcon className="w-6 h-6 text-label" />
          </button>
        </label>
        <div id="recentSearch"></div>
        <div
          id="popular search"
          className="pt-[11.23px] flex flex-col normal-case"
        >
          <p className="text-placeholder text-[14px]/[34.5px] ">
            Popular search terms
          </p>
          {popularTrend.map((ar, i) => (
            <DialogClose asChild className="normal-case" key={i}>
              <Link
                className="text-[16px]/[36.5px]"
                href={'/search' + `?query=` + ar}
              >
                {ar}
              </Link>
            </DialogClose>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};
export default SearchDropdown;
