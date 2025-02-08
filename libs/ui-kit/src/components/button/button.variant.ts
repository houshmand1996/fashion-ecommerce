import { cva } from 'class-variance-authority';
import React from 'react';
export const buttonVariants = cva(
  'flex inline-flex items-center justify-center body-large',
  {
    variants: {
      state: {
        primary: 'bg-title text-offWhite',
        secondary: 'border-[1px] border-solid border-line text-title ',
      },
      size: {
        sm: 'px-2 py-[30px] gap-2 backdrop-blur-[2px]',
        md: 'px-3 py-[33px] gap-[10px]',
        lg: 'py-5 px-[120px] gap-3',
      },
    },
    defaultVariants: {
      state: 'primary',
      size: 'sm',
    },
  }
);
