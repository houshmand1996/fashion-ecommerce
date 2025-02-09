import type { FC, SVGProps } from 'react';
const SvgDoNotWash: FC<SVGProps<SVGSVGElement>> = (
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
      <path d="m2.696 5.236 2.12 14.035h14.292l2.28-14.484" />
      <path d="M8.259 6.65c.033 1.074.803 3.224 3.619 3.224s3.783-2.193 3.915-3.29c.208 1.108 1.612 3.303 4.639 3.224m-17.055.286c.638.057 2.092-.194 2.802-1.658M3.192 2.747l17.247 17.6" />
    </svg>
  );
};
export default SvgDoNotWash;
