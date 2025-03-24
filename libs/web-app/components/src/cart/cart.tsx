import {
  Ellipse68Icon,
  MinusIcon,
  PlusIcon,
} from '@code-dudes/fashion-ecommerce/icon';
import { cn } from '@code-dudes/fashion-ecommerce/ui-kit';
import Image from 'next/image';
import { CartProps } from '../product/product.type';
export const Cart = ({ className, item }: CartProps) => {
  const { details, image, name, price, quantity } = item;
  return (
    <div className={cn('w-[313px] h-[134px] flex', className)}>
      <Image
        className="w-[100px] h-[133.33px]"
        width={500}
        height={500}
        src={image}
        alt=""
      />
      <div className=" flex-col flex-grow inline-flex items-start gap-3 w-[201px] h-[116px] ml-[10.72px]">
        <div className="flex flex-col w-fit items-start gap-[6px]">
          <p className="w-full h-5 uppercase text-black subtitle-medium">
            {name}
          </p>
          <p className="body-small text-label w-[201px] h-fit">{details}</p>
        </div>
        <div className="w-[78px] h-6 flex ">
          <button className="relative">
            <Ellipse68Icon className=" text-[#C4C4C4] w-6 h-6 opacity-20  stroke-1  fill-none" />
            <MinusIcon className="w-4 h-4 text-black absolute bottom-1 left-1" />
          </button>
          <p className="text-black font-TenorSans text-[14px]/[14px] ml-[17px] mr-[15.94px] mt-[4.77px] ">
            {quantity}
          </p>
          <button className="relative">
            <Ellipse68Icon className=" text-[#C4C4C4] w-6 h-6 opacity-20  stroke-1  fill-none" />
            <PlusIcon className="w-4 h-4 left-1 top-1 absolute" />
          </button>
        </div>
        <p className="w-8 h-6 text-secondary price">${price}</p>
      </div>
    </div>
  );
};
