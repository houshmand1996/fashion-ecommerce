import type { FC, SVGProps } from 'react';
const SvgFilter: FC<SVGProps<SVGSVGElement>> = (
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
      <path
        fillRule="evenodd"
        d="M3 7.5v1h18v-1zm7 9h4v-1h-4zm8-4H6v-1h12z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgFilter;
