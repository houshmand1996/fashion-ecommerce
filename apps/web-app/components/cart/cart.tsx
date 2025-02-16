import {
  Ellipse68Icon,
  MinusIcon,
  PlusIcon,
} from '@code-dudes/fashion-ecommerce/icon';
import { cn } from '@code-dudes/fashion-ecommerce/ui-kit ';
import picture from 'apps/web-app/public/Recycle Boucle Knit Cardigan Pink.png';
import Image from 'next/image';
type cartProp = { className?: string };
export const Cart = ({ className }: cartProp) => {
  return (
    <div className={cn('w-[313px] h-[134px] flex', className)}>
      <Image className="w-[100px] h-[133.33px]" src={picture} alt="" />
      <div className=" flex-col flex-grow inline-flex items-start gap-3 w-[201px] h-[116px] ml-[10.72px]">
        <div className="flex flex-col items-start gap-[6px]">
          <p className="w-[78px] h-5 uppercase text-title subtitle-medium">
            lamerei
          </p>
          <p className="body-small text-label w-[201px] h-[18px]">
            Recycle Boucle Knit Cardigan Pink
          </p>
        </div>
        <div className="w-[78px] h-6 flex ">
          <button className="">
            <Ellipse68Icon className=" text-[#C4C4C4] w-6 h-6 opacity-20  stroke-1 absolute fill-none" />
            <MinusIcon className="w-4 h-4 text-black ml-1 mt-1" />
          </button>
          <p className="w-[5px] h-[14px] text-black body-medium mx-[17px] ">
            1
          </p>
          <button>
            <Ellipse68Icon className=" text-[#C4C4C4] w-6 h-6 opacity-20  stroke-1 absolute fill-none" />
            <PlusIcon className="w-4 h-4 ml-1 mt-1" />
          </button>
        </div>
        <p className="w-8 h-6 text-primary font-TenorSans font-normal text-[15px]">
          $120
        </p>
      </div>
    </div>
  );
};
