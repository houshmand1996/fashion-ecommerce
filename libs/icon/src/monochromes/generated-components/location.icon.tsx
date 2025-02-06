import type { FC, SVGProps } from 'react';
const SvgLocation: FC<SVGProps<SVGSVGElement>> = (
  props: SVGProps<SVGSVGElement>
) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="currentColor"
      viewBox="0 0 24 25"
      {...props}
    >
      <g stroke="#14142B">
        <path d="M22 11c0 5.523-10 13-10 13S2 16.523 2 11 6.477 1 12 1s10 4.477 10 10Z" />
        <circle cx={12} cy={11} r={3} />
      </g>
    </svg>
  );
};
export default SvgLocation;
