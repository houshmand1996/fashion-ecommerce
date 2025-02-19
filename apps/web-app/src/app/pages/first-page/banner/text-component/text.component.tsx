import { cn } from '@code-dudes/fashion-ecommerce/ui-kit ';
import { FC } from 'react';
import { Text } from '../../../pages.type';

export const TextComponent: FC<Text> = ({ className, children }) => {
  return (
    <p
      className={cn(
        'flex-shrink-0 text-body banner opacity-70 mix-blend-multiply uppercase italic',
        className
      )}
    >
      {children}
    </p>
  );
};
