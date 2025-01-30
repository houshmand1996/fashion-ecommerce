import type { FC, SVGProps } from 'react';

export type IconListProps = SVGProps<SVGElement> & {
  icons: { [key: string]: FC<SVGProps<SVGSVGElement>> };
};
