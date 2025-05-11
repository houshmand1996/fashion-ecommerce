import { FC } from 'react';
import { TextComponent } from './text-component';
import { cn } from '@code-dudes/fashion-ecommerce/ui-kit';
import { classNameType } from '../../../pages.type';

export const Tab: FC<classNameType> = ({ className }) => {
  const tabLink = ['Apparel', 'Dress', 'Tshirt', 'bag'];
  return (
    <div
      id="tab"
      className={cn(
        'w-page h-9 flex-shrink-0 flex  justify-center items-center gap-[26px]',
        className
      )}
    >
      <TextComponent className="text-[#212806]">All</TextComponent>
      {tabLink.map((ar) => (
        <TextComponent className="text-placeholder opacity-80" key={ar}>
          {ar}
        </TextComponent>
      ))}
    </div>
  );
};
