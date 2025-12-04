import * as React from 'react';
import { cn } from '../../lib';
import type { TInputProps } from './input.type';
import { inputVariants } from './input.variant';

const Input = React.forwardRef<HTMLInputElement, TInputProps>(
  ({ className, sizes, variant, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants({ variant, sizes, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export { Input };
