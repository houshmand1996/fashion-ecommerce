import { cva } from 'class-variance-authority';

export const inputVariants = cva([''], {
  variants: {
    variant: {
      upload: 'hidden',
      default:
        'bg-white border-[#d4d4d4] placeholder-[#979797] text-[15px] outline-none ml-4',
    },
    sizes: {
      sm: 'w-[166px] h-[50px]',
      lg: 'w-[342px] h-[50px]',
    },
  },
  defaultVariants: {
    variant: 'default',
    sizes: 'lg',
  },
});
