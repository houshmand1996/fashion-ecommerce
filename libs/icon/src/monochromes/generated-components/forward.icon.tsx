import type { FC, SVGProps } from 'react';
const SvgForward: FC<SVGProps<SVGSVGElement>> = (
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
      <path d="m9 5 6.963 6.963L9 18.926" />
    </svg>
  );
};
export default SvgForward;
