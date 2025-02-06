import type { FC, SVGProps } from 'react';
const SvgVector: FC<SVGProps<SVGSVGElement>> = (
  props: SVGProps<SVGSVGElement>
) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="currentColor"
      viewBox="0 0 7 6"
      {...props}
    >
      <path stroke="#14142B" d="M.075 5.36 4.7 5.35l1.58-4.211" />
    </svg>
  );
};
export default SvgVector;
