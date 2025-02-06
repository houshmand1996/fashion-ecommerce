import type { FC, SVGProps } from 'react';
const SvgListview: FC<SVGProps<SVGSVGElement>> = (
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
      <path stroke="#14142B" d="M12.205 17h7.772M12.228 7H20" />
      <path stroke="#14142A" d="M2.513 3.455h7v7h-7zM2.513 13.514h7v7h-7z" />
    </svg>
  );
};
export default SvgListview;
