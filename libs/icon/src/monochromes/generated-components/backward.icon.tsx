import type { FC, SVGProps } from 'react';
const SvgBackward: FC<SVGProps<SVGSVGElement>> = (
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
      <path stroke="#14142B" d="M15.963 18.926 9 11.963 15.963 5" />
    </svg>
  );
};
export default SvgBackward;
