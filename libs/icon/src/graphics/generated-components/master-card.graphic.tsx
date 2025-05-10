import type { FC, SVGProps } from 'react';
const SvgMasterCard: FC<SVGProps<SVGSVGElement>> = (
  props: SVGProps<SVGSVGElement>
) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 54 33"
      {...props}
    >
      <g fillRule="evenodd" clipRule="evenodd">
        <path
          fill="#ED0006"
          d="M26.971 28.529a15.65 15.65 0 0 1-10.26 3.822c-8.734 0-15.815-7.163-15.815-16s7.08-16 15.816-16c3.915 0 7.497 1.439 10.26 3.822A15.65 15.65 0 0 1 37.23.351c8.736 0 15.817 7.163 15.817 16s-7.081 16-15.817 16a15.65 15.65 0 0 1-10.259-3.822"
        />
        <path
          fill="#F9A000"
          d="M26.971 28.529a16.04 16.04 0 0 0 5.557-12.178c0-4.876-2.156-9.243-5.557-12.178A15.65 15.65 0 0 1 37.231.351c8.735 0 15.816 7.164 15.816 16s-7.081 16-15.817 16a15.65 15.65 0 0 1-10.259-3.822"
        />
        <path
          fill="#FF5E00"
          d="M26.971 28.529a16.04 16.04 0 0 0 5.557-12.178 16.04 16.04 0 0 0-5.557-12.178 16.04 16.04 0 0 0-5.557 12.178 16.04 16.04 0 0 0 5.557 12.178"
        />
      </g>
    </svg>
  );
};
export default SvgMasterCard;
