import type { FC, SVGProps } from 'react';
const SvgGallery: FC<SVGProps<SVGSVGElement>> = (
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
      <path
        stroke="#14142B"
        d="M3.045 18.026h17.91M20.802 17.533v3.86M3.305 17.533v3.86"
      />
      <path stroke="#14142A" d="M3.25 3.455h17.5v10.746H3.25z" />
    </svg>
  );
};
export default SvgGallery;
