import type { VariantProps } from 'class-variance-authority';
import type { inputVariants } from './input.variant';

export interface TInputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}
