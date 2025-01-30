import type { FC, SVGProps } from 'react';
const SvgAi: FC<SVGProps<SVGSVGElement>> = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0.32 0.32 15.36 15.36"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        stroke="#fff"
        strokeLinejoin="round"
        strokeWidth={1.071}
        d="M5.144 10.143c3.482 0 5-1.465 5-5 0 3.535 1.507 5 5 5-3.493 0-5 1.507-5 5 0-3.493-1.518-5-5-5ZM.858 4.07c2.238 0 3.214-.941 3.214-3.214 0 2.273.97 3.214 3.214 3.214-2.245 0-3.214.97-3.214 3.215 0-2.245-.976-3.215-3.214-3.215Z"
      />
    </svg>
  );
};
export default SvgAi;
