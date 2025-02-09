import type { FC, SVGProps } from 'react';
const SvgPlus: FC<SVGProps<SVGSVGElement>> = (
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
      <path d="M12 3v18M3 12h18" />
    </svg>
  );
};
export default SvgPlus;
