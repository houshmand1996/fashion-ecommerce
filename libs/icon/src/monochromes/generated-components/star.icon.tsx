import type { FC, SVGProps } from 'react';
const SvgStar: FC<SVGProps<SVGSVGElement>> = (
  props: SVGProps<SVGSVGElement>
) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="currentColor"
      viewBox="0 0 14 13"
      {...props}
    >
      <path d="m6.757.243 1.759 4.335 4.666.334-3.579 3.013 1.125 4.541-3.971-2.473-3.972 2.473L3.91 7.925.33 4.912l4.667-.334z" />
    </svg>
  );
};
export default SvgStar;
