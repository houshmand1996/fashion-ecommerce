import {
  LogoIcon,
  MenuIcon,
  SearchIcon,
  ShoppingBagIcon,
} from '@code-dudes/fashion-ecommerce/icon';

export const Header = () => {
  return (
    <div className="bg-header w-full flex items-center min-h-[60px] min-w-[375px]">
      <MenuIcon className="text-title w-[24px] h-[25px] ml-[16px]" />
      <LogoIcon className="text-black w-[78.347px] h-[31.094px] ml-[122px]" />
      <SearchIcon
        className="text-title w-[24px] h-[24px]
          ml-[67.92px] fill-none"
      />
      <ShoppingBagIcon className="w-6 h-6 text-title fill-none ml-4" />
    </div>
  );
};
