import * as React from 'react';
import { cn } from '../../lib';
import type { TInputProps } from './input.type';
import { inputVariants } from './input.variant';

const Input = React.forwardRef<HTMLInputElement, TInputProps>(
  ({ className, variant = 'default', type, ...props }, ref) => {
    const classes = cn(
      inputVariants({
        variant,
      }),
      className,
    );
    return <input type={type} className={classes} ref={ref} {...props} />;
  },
);
Input.displayName = 'Input';

export { Input };
