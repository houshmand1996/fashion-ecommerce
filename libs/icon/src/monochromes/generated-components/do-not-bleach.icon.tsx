import type { FC, SVGProps } from 'react';
const SvgDoNotBleach: FC<SVGProps<SVGSVGElement>> = (
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
      <path d="m7.65 11.446-3.81 7.095h16.14L11.988 3.547 8.735 9.34M3.779 6.955 21.809 16" />
    </svg>
  );
};
export default SvgDoNotBleach;
