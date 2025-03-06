import { cn } from '@code-dudes/fashion-ecommerce/ui-kit';
import { FC } from 'react';
import { CardBackgroundType } from '../../add-card.type';

export const CardBackground: FC<CardBackgroundType> = ({ item, className }) => {
  const { Icon, cardNumber, expMonth, expYear, name } = item;
  return (
    <div
      className={cn(
        'w-[316px] h-[190px]  rounded-2xl   relative   text-white text-[16px]/[16px] flex-shrink-0 ',
        className
      )}
    >
      <Icon className="w-[52.151px] h-8 top-[10.95px] left-[252.59px] absolute" />
      <div className="absolute top-[128.62px] left-[11.78px] flex flex-wrap">
        <div className="flex justify-between w-full">
          <p className="w-[175px] h-[24.66px] capitalize">
            {name || 'yourName'}
          </p>
          <p className="mr-[13.23px] ">{`${expMonth || '01'}/${
            expYear || '01'
          }`}</p>
        </div>
        <p className="text-[18px]/[16px] tracking-[1px] basis-full">
          {cardNumber || '1234-5678-9123-4567'}
        </p>
      </div>
    </div>
  );
};
