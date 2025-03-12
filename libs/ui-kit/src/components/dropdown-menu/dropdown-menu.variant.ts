import { cva } from 'class-variance-authority';
export const dialogVariants = cva(
  'flex inline-flex items-center justify-center uppercase ',
  {
    variants: {
      state: {
        primary: 'bg-black text-off-white',
        secondary: 'border-[1px] border-solid border-line text-black ',
      },
      size: {
        sm: 'py-2 px-[30px] gap-2 backdrop-blur-[2px] body-large',
        md: 'py-3 px-[33px] gap-[10px] body-large text-center',
        lg: 'h-14 gap-6 body-medium text-center tracking-[0.14px]',
      },
    },
    defaultVariants: {
      state: 'primary',
      size: 'sm',
    },
  }
);
