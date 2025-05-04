import {
  LogoIcon,
  MenuIcon,
  SearchIcon,
  ShoppingBagIcon,
} from '@code-dudes/fashion-ecommerce/icon';
import Link from 'next/link';
import MenuDropdown from './menu-dropdown/menu-dropdown';
import CartDropdown from './cart-dropdown/cart-dropdown';
import { Button } from '@code-dudes/fashion-ecommerce/ui-kit';
import { cookies } from 'next/headers';

export const Header = () => {
  const cartId = cookies().get('temp_user_id')?.value;
  return (
    <header className="bg-header w-full flex items-center min-h-[60px] min-w-[375px]">
      <MenuDropdown />
      <Link href={'/'} className="text-black  ml-[102px]">
        <LogoIcon className="w-[78.347px] h-[31.094px]" />
      </Link>
      <div>
        <Button state={'default'} size={'default'} className="h-full">
          <SearchIcon
            className="text-black w-[24px] h-[24px]
          ml-[67.92px] fill-none"
          />
        </Button>
      </div>
      <CartDropdown cartId={cartId} />
    </header>
  );
};
