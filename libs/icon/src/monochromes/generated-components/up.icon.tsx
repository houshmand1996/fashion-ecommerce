import type { FC, SVGProps } from 'react';
const SvgUp: FC<SVGProps<SVGSVGElement>> = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="currentColor"
      viewBox="0 0 24 24"
      {...props}
    >
      <path stroke="#14142B" d="m5.518 15.445 6.964-6.963 6.963 6.963" />
    </svg>
  );
};
export default SvgUp;
