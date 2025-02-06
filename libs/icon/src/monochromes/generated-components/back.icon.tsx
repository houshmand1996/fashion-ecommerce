import type { FC, SVGProps } from 'react';
const SvgBack: FC<SVGProps<SVGSVGElement>> = (
  props: SVGProps<SVGSVGElement>
) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="currentColor"
      viewBox="0 0 9 9"
      {...props}
    >
      <path stroke="#14142B" d="m8.601 4.024-4.454.292-1.654 4.237" />
    </svg>
  );
};
export default SvgBack;
