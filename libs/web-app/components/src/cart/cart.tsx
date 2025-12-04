'use client';
import {
  Ellipse68Icon,
  MinusIcon,
  PlusIcon,
} from '@code-dudes/fashion-ecommerce/icon';
import { cn } from '@code-dudes/fashion-ecommerce/ui-kit';
import Image from 'next/image';
import { CartProps } from '../product/product.type';
export const Cart = ({
  className,
  item,
  onclickMinus,
  onclickPlus,
}: CartProps) => {
  const { description, image, name, price, quantity, color, size } = item;
  return (
    <div className={cn('w-[313px] h-[134px] flex', className)}>
      <Image
        className="w-[100px] h-[133.33px]"
        width={500}
        height={500}
        src={image}
        alt=""
      />
      <div className=" flex-col flex-grow inline-flex items-start gap-2 w-[201px] h-[133px] ml-[10.72px]">
        <div className="flex flex-col w-fit items-start gap-[6px]">
          <p className="w-full h-5 uppercase text-black subtitle-medium">
            {name}
          </p>
          <p className="body-small text-label w-[201px] h-5 truncate">
            {description}
          </p>
          <div className="flex gap-3 w-full">
            {color && (
              <div
                className="w-5 h-5  border-2 rounded-full flex items-center justify-center
                border-[#888]"
                style={{ backgroundColor: color }}
              />
            )}
            {size && (
              <div className=" w-5 h-5 border-[#DEDEDE] border-[1px] rounded-full text-[9px]/[10px] text-center text-label flex justify-center items-center">
                {size}
              </div>
            )}
          </div>
        </div>
        <div className="w-[78px] h-6 flex justify-between items-center">
          <button className="relative" onClick={onclickMinus}>
            <Ellipse68Icon className=" text-[#C4C4C4] w-6 h-6 opacity-20  stroke-1  fill-none" />
            <MinusIcon className="w-4 h-4 text-black absolute bottom-1 left-1" />
          </button>
          <p className="text-black font-TenorSans text-[14px]/[14px]  ">
            {quantity}
          </p>
          <button className="relative" onClick={onclickPlus}>
            <Ellipse68Icon className=" text-[#C4C4C4] w-6 h-6 opacity-20  stroke-1  fill-none" />
            <PlusIcon className="w-4 h-4 left-1 top-1 absolute" />
          </button>
        </div>
        <p className="w-8 h-6 text-secondary price">${price}</p>
      </div>
    </div>
  );
};
