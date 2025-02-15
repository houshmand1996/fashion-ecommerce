import type { VariantProps } from 'class-variance-authority';
import { productVariants } from './product.variant';
export interface productProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof productVariants> {}
