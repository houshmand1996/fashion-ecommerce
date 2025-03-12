import * as React from 'react';
import { cn } from '../../lib';
import type { DialogProps } from './dropdown-menu.type';
import { dialogVariants } from './dropdown-menu.variant';
export const DropdownMenu = React.forwardRef<HTMLDialogElement, DialogProps>(
  ({ className, ...props }, ref) => {
    return (
      <dialog
        className={cn(dialogVariants({ className }))}
        {...props}
        ref={ref}
      />
    );
  }
);
