import { cva } from 'class-variance-authority';
export const tagVariants = cva(
  'flex inline-flex items-start text-[14px]/[16px] tracking-[0.14px] rounded-[30px] py-2 px-[10px] text-body',
  {
    variants: {
      styles: {
        fill: 'bg-input gap-[10px]',
        border: 'gap-[6px] border-[1px] border-solid border-line',
      },
    },
    defaultVariants: {
      styles: 'border',
    },
  }
);
