import type { FC, SVGProps } from 'react';
const SvgMinus: FC<SVGProps<SVGSVGElement>> = (
  props: SVGProps<SVGSVGElement>
) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="currentColor"
      viewBox="0 0 17 16"
      {...props}
    >
      <path stroke="currentColor" d="M2.716 8h12" />
    </svg>
  );
};
export default SvgMinus;
