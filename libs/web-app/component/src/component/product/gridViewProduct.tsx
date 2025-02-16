import { HeartIcon } from '@code-dudes/fashion-ecommerce/icon';
import Image from 'next/image';
import { product } from './product.type';
import { cn } from '../../lib';

export const GridViewProduct = ({
  item,
  className,
}: {
  item: product & { details: string };
  className: string;
}) => {
  const { image, name, price, details } = item;
  return (
    <div className={cn('inline-flex flex-col item-start gap-2', className)}>
      <div className="w-[165px] h-[220px] relative">
        <Image alt="" src={image} className="" />
        <HeartIcon className="w-4 h-4 text-primary absolute left-[140px] bottom-[6px] fill-none " />
      </div>
      <div className="flex pl-1 flex-col items-start gap-1">
        <div className="flex w-[159px] flex-col items-start body-small">
          <p className="w-[34px] h-[15px] text-title ">{name}</p>
          <p className="w-[157px] h-[14px] text-label"> {details}</p>
        </div>
        <p className="text-primary price">{price}</p>
      </div>
    </div>
  );
};
