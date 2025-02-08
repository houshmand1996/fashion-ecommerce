import type { FC, SVGProps } from 'react';
const SvgSeArrow: FC<SVGProps<SVGSVGElement>> = (
  props: SVGProps<SVGSVGElement>
) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      stroke="currentColor"
      viewBox="0 0 15 15"
      fill="currentColor"
      {...props}
    >
      <path d="M10.912 11.355H3.637v-7.29" />
      <path d="M0-.5h10.165" transform="rotate(-45.065 15.886 .618)" />
    </svg>
  );
};
export default SvgSeArrow;
