import { HeartIcon } from '@code-dudes/fashion-ecommerce/icon';
import Image from 'next/image';
import { cn } from '@code-dudes/fashion-ecommerce/ui-kit';
import { FC } from 'react';
import { FullProductProps } from '../product.type';

export const FullProduct: FC<
  FullProductProps & {
    iLoveProduct?: (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
  }
> = ({ item, className, iLoveProduct }) => {
  const { image, name, price, details } = item;
  return (
    <div
      className={cn(
        'w-[343px] h-[511px] flex-shrink-0 relative my-1',
        className
      )}
    >
      <div className="w-[343px] h-[457.3px] flex-shrink-0 relative">
        <Image
          height={1000}
          width={1000}
          alt=""
          src={image}
          className="w-[343px] h-[457.3px] flex-shrink-0 "
        />
        <HeartIcon
          onClick={iLoveProduct}
          className="h-4 w-4 text-primary fill-transparent absolute right-[15px] bottom-[13.4px] "
        />
      </div>
      <p className="text-black title w-full h-[33px] flex-shrink-0">{name}</p>
      <p className="text-label text-center body-large w-[268px] h-6 truncate ">
        {details}
      </p>

      <p className="text-secondary font-TenorSans text-lg/[14px]  capitalize w-[45px] h-[14px] absolute bottom-0 right-0">
        ${price}
      </p>
    </div>
  );
};
