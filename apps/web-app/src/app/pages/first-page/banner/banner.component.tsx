import Image from 'next/image';
import { TextComponent } from './text-component';
import { Group12Icon } from '@code-dudes/fashion-ecommerce/icon';
import { Button, cn } from '@code-dudes/fashion-ecommerce/ui-kit ';
import { FC } from 'react';
import { classNameType } from '../../pages.type';
export const Banner: FC<classNameType> = ({ className }) => {
  return (
    <div
      id="banner"
      className={cn('w-page h-[600px] flex-shrink-0 mb-6', className)}
    >
      <div className="relative ">
        <Image
          src={'/niceShoe.png'}
          width={500}
          height={500}
          alt=""
          className="w-[556px] h-[600px] flex-shrink-0 "
        />
        <TextComponent className="w-[175.16px] h-[43.4px]  absolute  left-[42.84px] top-[231.44px]">
          Luxury
        </TextComponent>
        <TextComponent className="w-[187.242px] h-[43.488px]  absolute left-[60.37px] top-[269.64px]">
          Fashion
        </TextComponent>
        <TextComponent
          className={
            'w-[25.813px] h-[34.418px] !text-[30.594px]/[34.48px] absolute left-[36.71px] top-[317.24px] '
          }
        >
          &
        </TextComponent>
        <TextComponent className="w-[287.507px] h-[43.488px] absolute top-[309.02px] left-[65.04px]">
          Accessories
        </TextComponent>
        <Group12Icon className="w-10 h-2 flex-shrink-0 text-off-white absolute top-[573.82px] left-[167.5px] fill-none  first-child:fill-current" />
        <Button
          state={'primary'}
          size={'sm'}
          className="absolute top-[520px] left-[61px] rounded-[30px]  footer uppercase bg-opacity-40"
        >
          Explore Collection
        </Button>
      </div>
    </div>
  );
};
