import type { FC, SVGProps } from 'react';
const SvgShoppingBag: FC<SVGProps<SVGSVGElement>> = (
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
      <path d="m3.496 23.28.816-16.56h16.347l.816 16.56z" />
      <path d="M8.16 10.15V5.55a4.325 4.325 0 0 1 8.65 0v4.598" />
    </svg>
  );
};
export default SvgShoppingBag;
