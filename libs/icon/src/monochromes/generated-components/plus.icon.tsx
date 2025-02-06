import type { FC, SVGProps } from 'react';
const SvgPlus: FC<SVGProps<SVGSVGElement>> = (
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
        <path d="M12 3v18M3 12h18" />
      </g>
    </svg>
  );
};
export default SvgPlus;
