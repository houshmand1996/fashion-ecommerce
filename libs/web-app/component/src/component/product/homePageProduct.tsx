import Image from 'next/image';
import { product } from './product.type';
import { cn } from '../../lib';

export const HomePageProduct = ({
  item,
  className,
}: {
  item: product;
  className: string;
}) => {
  const { image, name, price } = item;
  return (
    <div
      className={cn(
        'flex w-[165px] h-[260] flex-col justify-center item-center gap-[2px] flex-shrink-0',
        className
      )}
    >
      <Image alt="" src={image} className="w-[165px] h-[200px] flex-shrink-0" />
      <div className="flex w-[151px] flex-col items-center">
        <p className="body-small text-body text-center">{name}</p>
        <p className="price text-primary">{price}</p>
      </div>
    </div>
  );
};
