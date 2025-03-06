import { cn } from '@code-dudes/fashion-ecommerce/ui-kit';
import { FC, useState } from 'react';
import { CardBackground } from './card-background-component';
import {
  MasterCardGraphic,
  Group12Icon,
} from '@code-dudes/fashion-ecommerce/icon';
import { CardSliderType } from '../add-card.type';
export const CardSlider: FC<CardSliderType> = ({ item }) => {
  const [group, setGroup] = useState(0);

  return (
    <div>
      <div
        className={cn(
          'flex gap-[13.44px] mt-[12.86px]  overflow-hidden ',
          group == 0 ? 'ml-[13px]' : group == 1 ? '-ml-[300px]' : '-ml-[600px]'
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
      <Group12Icon
        onClick={(e) => {
          const value = e.clientX;
          console.log(value);

          if (value <= 193 && value > 184) {
            setGroup(1);
          } else if (value >= 200) setGroup(2);
          else if (value <= 177 && value >= 171) setGroup(0);
        }}
        className={cn(
          'w-10 h-2 mt-[13.85px] ml-[167.5px]  text-[#888888] stroke-[0.5px] fill-none',
          group == 0
            ? 'first-child:GroupIcon'
            : group == 1
            ? `last-child:GroupIcon `
            : 'even-child:GroupIcon'
        )}
      />
    </div>
  );
};
