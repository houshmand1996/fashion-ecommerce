import type { FC, SVGProps } from 'react';
const SvgArrow: FC<SVGProps<SVGSVGElement>> = (
  props: SVGProps<SVGSVGElement>
) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="currentColor"
      viewBox="0 0 15 15"
      {...props}
    >
      <g stroke="#14142B">
        <path d="M4.087 3.646h7.275v7.29" />
        <path d="M0-.5h10.165" transform="rotate(134.935 4.699 3.961)" />
      </g>
    </svg>
  );
};
export default SvgArrow;
