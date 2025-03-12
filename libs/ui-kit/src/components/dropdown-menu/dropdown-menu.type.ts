import type { VariantProps } from 'class-variance-authority';
import type { dialogVariants } from './dropdown-menu.variant';

export interface DialogProps
  extends React.DialogHTMLAttributes<HTMLDialogElement>,
    VariantProps<typeof dialogVariants> {}
