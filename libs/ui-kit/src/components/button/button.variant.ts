import { cva } from 'class-variance-authority';
export const buttonVariants = cva(
  'flex inline-flex items-center justify-center uppercase ',
  {
    variants: {
      state: {
        primary: 'bg-black text-off-white',
        secondary: 'border-[1px] border-solid border-line text-black ',
      },
      size: {
        sm: 'py-2 px-[30px] gap-2 backdrop-blur-[2px] body-large',
        md: 'py-3 px-[33px] gap-[10px] body-large',
        lg: 'py-5 px-[120px] gap-3 body-medium',
      },
    },
    defaultVariants: {
      state: 'primary',
      size: 'sm',
    },
  }
);
