import { HeartIcon } from '@code-dudes/fashion-ecommerce/icon';
import Image from 'next/image';
import { cn } from '@code-dudes/fashion-ecommerce/ui-kit';
import { FC } from 'react';
import { FullProductProps } from '../product.type';

export const GridViewProduct: FC<
  FullProductProps & {
    iLoveProduct?: (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
  }
> = ({ item, className, iLoveProduct }) => {
  const { image, name, price, description } = item;
  return (
    <div className={cn('inline-flex flex-col item-start gap-2', className)}>
      <div className="w-[165px] h-[220px] relative">
        <Image
          alt=""
          src={image}
          className=""
          sizes="165px"
          loading="lazy"
          fill
        />
        <HeartIcon
          onClick={iLoveProduct}
          className="w-4 h-4 text-primary absolute left-[140px] bottom-[6px] fill-none "
        />
      </div>
      <div className="flex pl-1 flex-col items-start gap-1">
        <div className="flex w-[159px] flex-col items-start body-small truncate">
          <p className=" h-[15px] text-black ">{name}</p>
          <p className="w-[157px] h-[18px] lowercase  text-label ">
            {description}
          </p>
        </div>
        <p className="text-primary price">${price}</p>
      </div>
    </div>
  );
};
