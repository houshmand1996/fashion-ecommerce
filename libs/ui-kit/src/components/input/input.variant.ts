import { cva } from 'class-variance-authority';

export const inputVariants = cva([''], {
  variants: {
    variant: {
      upload: 'hidden',
      default:
        'flex w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-fill-tertiary  border-solid border-line-base',
      simple:
        'flex w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm border-solid border-line-base',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});
