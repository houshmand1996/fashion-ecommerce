import {
  LogoIcon,
  MenuIcon,
  SearchIcon,
  ShoppingBagIcon,
} from '@code-dudes/fashion-ecommerce/icon';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className="bg-header w-full flex items-center min-h-[60px] min-w-[375px]">
      <button className="w-[24px] h-[25px] ml-[16px] text-title outline-none ">
        <MenuIcon className=" " />
      </button>
      <Link href={'/'} className="text-black  ml-[122px]">
        <LogoIcon className="w-[78.347px] h-[31.094px]" />
      </Link>
      <SearchIcon
        className="text-title w-[24px] h-[24px]
          ml-[67.92px] fill-none"
      />
      <ShoppingBagIcon className="w-6 h-6 text-title fill-none ml-4" />
    </header>
  );
};
