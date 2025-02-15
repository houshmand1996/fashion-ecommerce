import { cva } from 'class-variance-authority';
export const productVariants = cva('', {
  variants: {
    type: {
      gridView: 'inline-flex flex-col item-start gap-2',
      full: 'w-[343px] min-h-[511px] flex-shrink-0 relative my-1',
      listView: 'min-w-[343px] h-[134px] flex-shrink-0 flex gap-3 ',
      homePage:
        'flex w-[165px] h-[260] flex-col justify-center item-center gap-[2px] flex-shrink-0',
    },
  },
  defaultVariants: {
    type: 'gridView',
  },
});
