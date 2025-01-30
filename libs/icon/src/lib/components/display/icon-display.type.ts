import type { FC, SVGProps } from 'react';

export type IconDisplayPropsType = {
  IconComponent: FC<SVGProps<SVGSVGElement>>;
  name: string;
} & SVGProps<SVGElement>;
