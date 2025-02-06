import type { FC, SVGProps } from 'react';
const SvgDoNotBleach: FC<SVGProps<SVGSVGElement>> = (
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
      <g stroke="#000">
        <path d="m7.65 11.446-3.81 7.095h16.14L11.988 3.547 8.735 9.34M3.779 6.955 21.809 16" />
      </g>
    </svg>
  );
};
export default SvgDoNotBleach;
