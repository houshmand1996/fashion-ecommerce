import type { FC, SVGProps } from 'react';
const SvgDown: FC<SVGProps<SVGSVGElement>> = (
  props: SVGProps<SVGSVGElement>
) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="currentColor"
      viewBox="0 0 24 24"
      {...props}
    >
      <path stroke="#14142B" d="m19.445 8.481-6.963 6.964L5.518 8.48" />
    </svg>
  );
};
export default SvgDown;
