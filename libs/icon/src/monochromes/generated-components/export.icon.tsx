import type { FC, SVGProps } from 'react';
const SvgExport: FC<SVGProps<SVGSVGElement>> = (
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
      <g stroke="#14142B">
        <path d="m17 6-5.5-5L6 6M11.5 1v13M3 12v10h17V12" />
      </g>
    </svg>
  );
};
export default SvgExport;
