import { cva } from 'class-variance-authority';
import React from 'react';
export const buttonVariants = cva(
  'flex inline-flex items-center justify-center body-large',
  {
    variants: {
      state: {
        primary: 'bg-black text-off-white',
        secondary: 'border-[1px] border-solid border-line text-black ',
        default: 'bg-transparent text-black outline-none border-none',
      },
      size: {
        default: 'w-fit h-fit',
        sm: 'py-2 px-[30px] gap-2 backdrop-blur-[2px]',
        md: 'py-3 px-[33px] gap-[10px]',
        lg: 'py-5 px-[120px] gap-3',
      },
    },
    defaultVariants: {
      state: 'primary',
      size: 'sm',
    },
  }
);
