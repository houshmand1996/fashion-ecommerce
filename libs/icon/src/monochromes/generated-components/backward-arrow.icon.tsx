import type { FC, SVGProps } from 'react';
const SvgBackwardArrow: FC<SVGProps<SVGSVGElement>> = (
  props: SVGProps<SVGSVGElement>
) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      stroke="currentColor"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="m9.612 19-6.717-7 6.717-7M3.267 11.891H21" />
    </svg>
  );
};
export default SvgBackwardArrow;
