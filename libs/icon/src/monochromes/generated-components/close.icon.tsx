import type { FC, SVGProps } from 'react';
const SvgClose: FC<SVGProps<SVGSVGElement>> = (
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
      <g stroke="#14142B" strokeLinejoin="round">
        <path d="m6 6 12.774 12.774M6 18.774 18.774 6" />
      </g>
    </svg>
  );
};
export default SvgClose;
