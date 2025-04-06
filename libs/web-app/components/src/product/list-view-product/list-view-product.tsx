import {
  Ellipse68Icon,
  HeartIcon,
  StarIcon,
} from '@code-dudes/fashion-ecommerce/icon';
import Image from 'next/image';
import { cn } from '@code-dudes/fashion-ecommerce/ui-kit';
import { FC } from 'react';
import { ListViewProductProps } from '../product.type';

export const ListViewProduct: FC<
  ListViewProductProps & {
    iLoveProduct?: (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
  }
> = ({ item, iLoveProduct, className }) => {
  const { image, name, price, details, rating } = item;
  return (
    <div
      className={cn(
        'min-w-[343px] h-[134px] flex-shrink-0 flex gap-3',
        className
      )}
    >
      <div className="flex w-[100px] h-[134px] pb-[0.667px] flex-col justify-center items-center flex-shrink-0 ">
        <Image
          loading="lazy"
          alt=""
          src={image}
          sizes="100px"
          width={500}
          height={500}
          className="w-[100px] h-[133.33px] flex-shrink-0"
        />
      </div>
      <div className="relative">
        <div className="flex min-w-[231px]  flex-col items-start gap-[11px] relative">
          <div className="flex-flex-col items-start gap-1">
            <div className="flex min-w-[206px] flex-col items-start truncate">
              <p className="text-black subtitle-medium">{name}</p>
              <p className="w-[235px] h-[20px] text-label body-medium mr-1 text-center">
                {details}
              </p>
            </div>
            <p className="text-primary price">${price}</p>
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
        <HeartIcon
          className=" h-4 w-4 absolute bottom-[10px] right-[15px]  text-primary fill-none "
          onClick={iLoveProduct}
        />
      </div>
    </div>
  );
};
