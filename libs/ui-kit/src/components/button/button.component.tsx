import * as React from 'react';
import { cn } from '../../lib';
import type { ButtonProps } from './button.type';
import { buttonVariants } from './button.variant';
import { Slot } from '@radix-ui/react-slot';
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, state, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ state, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
