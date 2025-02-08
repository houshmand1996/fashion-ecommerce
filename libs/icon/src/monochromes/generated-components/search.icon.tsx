import type { FC, SVGProps } from 'react';
const SvgSearch: FC<SVGProps<SVGSVGElement>> = (
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
      <path d="M11 20a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM22 22l-3.218-3.218" />
    </svg>
  );
};
export default SvgSearch;
