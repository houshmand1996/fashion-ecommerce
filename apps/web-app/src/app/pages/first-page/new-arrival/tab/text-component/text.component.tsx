import { cn } from '@code-dudes/fashion-ecommerce/ui-kit';
import { FC } from 'react';
import { Text } from '../../../../pages.type';
export const TextComponent: FC<Text> = ({ className, children }) => {
  return (
    <p
      className={cn(
        'text-center font-TenorSans text-sm/[14.84px] tracking-[1px] ',
        className
      )}
    >
      {children}
    </p>
  );
};
