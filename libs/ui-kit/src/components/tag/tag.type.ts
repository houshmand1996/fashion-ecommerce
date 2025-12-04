import type { VariantProps } from 'class-variance-authority';
import { tagVariants } from './tag.variant';
export interface tagProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof tagVariants> {}
