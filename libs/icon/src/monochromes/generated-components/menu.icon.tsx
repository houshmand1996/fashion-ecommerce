import type { FC, SVGProps } from 'react';
const SvgMenu: FC<SVGProps<SVGSVGElement>> = (
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
      <path d="M.307 12h15.675M.307 5h23.386M.307 19h23.386" />
    </svg>
  );
};
export default SvgMenu;
