'use client';
import { cn } from '@code-dudes/fashion-ecommerce/ui-kit ';
import { FC, useEffect, useState } from 'react';
import { CardBackground } from './card-background-component';
import { MasterCardGraphic } from '@code-dudes/fashion-ecommerce/icon';
import { CardSliderType } from '../add-card.type';
export const CardSlider: FC<CardSliderType> = ({ item }) => {
  const [group, setGroup] = useState(0);
  return (
    <div>
      <div
        className={cn(
          'flex gap-[13.44px] mt-[12.86px]  overflow-hidden ',
          group == 0 ? 'ml-[13px]' : group == 1 ? '-ml-[300px]' : '-ml-[630px]'
        )}
      >
        <CardBackground
          item={{ ...item, Icon: MasterCardGraphic }}
          className=" bg-gradient-to-r from-[#3B41C5] via-[#A981BB] vie-49% to-[#FFC8A9]  "
        />

        <CardBackground
          item={{ ...item, Icon: MasterCardGraphic }}
          className=" bg-gradient-to-r from-[#434343] from-0%  to-black to-100%  "
        />

        <CardBackground
          item={{ ...item, Icon: MasterCardGraphic }}
          className=" bg-gradient-to-r from-[#29323C]  to-[#485563] "
        />
      </div>
      <div className="w-10 h-2 mt-[13.85px] ml-[167.5px] flex justify-between">
        {Array(3)
          .fill(0)
          .map((_ar, i) => (
            <button
              aria-label={`Slide ${i + 1}`}
              key={i}
              className={cn(
                'w-[5.66px] h-[5.66px]  border-[0.5px]  rotate-45',
                group == i
                  ? 'bg-secondary border-secondary border-[1px]'
                  : 'border-placeholder'
              )}
              onClick={() => setGroup(i)}
            />
          ))}
      </div>
    </div>
  );
};
