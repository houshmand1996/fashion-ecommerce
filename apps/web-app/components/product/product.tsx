'use client';
import { cn } from '@code-dudes/fashion-ecommerce/ui-kit ';
import { productProps } from './product.type';
import { productVariants } from './product.variant';
import Image, { StaticImageData } from 'next/image';
import {
  Ellipse68Icon,
  HeartIcon,
  StarIcon,
} from '@code-dudes/fashion-ecommerce/icon';
export type product = {
  image: string | StaticImageData;
  name: string;
  details?: string;
  price: string | number;
  rating?: string | number;
};
export const Product = ({
  className,
  rating,
  type,
  details,
  image,
  name,
  price,
  ...prop
}: productProps & product) => {
  return (
    <div
      className={cn(productVariants({ type }), className)}
      {...prop}
      id="product"
    >
      {type === 'gridView' ? (
        <>
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
        </>
      ) : type === 'homePage' ? (
        <>
          <Image
            alt=""
            src={image}
            className="w-[165px] h-[200px] flex-shrink-0"
          />
          <div className="flex w-[151px] flex-col items-center">
            <p className="body-small text-body text-center">{name}</p>
            <p className="price text-primary">{price}</p>
          </div>
        </>
      ) : type === 'listView' ? (
        <>
          <div className="flex w-[100px] h-[134px] pb-[0.667px] flex-col justify-center items-center flex-shrink-0 ">
            <Image
              alt=""
              src={image}
              className="w-[100px] h-[133.33px] flex-shrink-0"
            />
          </div>
          <div className="flex min-w-[231px]  flex-col items-start gap-[11px] relative">
            <div className="flex-flex-col items-start gap-1">
              <div className="flex min-w-[206px] flex-col items-start">
                <p className="text-title subtitle-medium">{name}</p>
                <p className="w-[235px] h-[18px] text-label body-medium mr-1">
                  {details}
                </p>
              </div>
              <p className="text-primary price">{price}</p>
            </div>
            <div className="flex items-center gap-[3px]">
              <StarIcon className="w-[13.5px] h-[13.5px] text-secondary   " />
              <p className="text-label body-small">{rating} Rating</p>
            </div>
            <div className="flex items-center gap-[6px]">
              <p className="text-label body-small">Size</p>
              <div className="w-6 h-6 ">
                <Ellipse68Icon className=" w-6 h-6 flex-shrink-0 stroke-1 text-border fill-none absolute" />
                <p className="text-label text-center size  w-[7px] h-[12px] ml-2 mt-[6px]  ">
                  S
                </p>
              </div>
              <div className="w-6 h-6 ">
                <Ellipse68Icon className=" w-6 h-6 flex-shrink-0 stroke-1 text-border fill-none absolute" />
                <p className="text-label text-center size  w-[7px] h-[12px] ml-[6px] mt-[6px]  ">
                  M
                </p>
              </div>
              <div className="w-6 h-6 ">
                <Ellipse68Icon className=" w-6 h-6 flex-shrink-0 stroke-1 text-border fill-none absolute" />
                <p className="text-label text-center size  w-[7px] h-[12px] ml-2 mt-[6px]  ">
                  L
                </p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="w-[343px] h-[457.3px] flex-shrink-0 relative">
            <Image
              alt=""
              src={image}
              className="w-[343px] h-[457.3px] flex-shrink-0 "
            />
            <HeartIcon className="h-4 w-4 text-primary fill-transparent absolute right-[15px] bottom-[13.4px] " />
          </div>
          <p className="text-black title w-[94px] h-[33px] flex-shrink-0">
            {name}
          </p>
          <p className="text-label text-center body-large w-[268px] h-6 ">
            {details}
          </p>

          <p className="text-secondary font-TenorSans text-lg/[14px]  capitalize w-[38px] h-[14px] absolute bottom-0 right-0">
            {price}
          </p>
        </>
      )}
    </div>
  );
};
