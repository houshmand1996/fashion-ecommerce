import type { FC, SVGProps } from 'react';
const SvgForwardArrow: FC<SVGProps<SVGSVGElement>> = (
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
      <path d="M14.283 5 21 12l-6.717 7M20.628 12.109H2.895" />
    </svg>
  );
};
export default SvgForwardArrow;
