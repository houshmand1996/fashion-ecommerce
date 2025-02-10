import type { FC, SVGProps } from 'react';
const SvgSeparator: FC<SVGProps<SVGSVGElement>> = (
  props: SVGProps<SVGSVGElement>
) => {
  return (
    // <svg
    //   xmlns="http://www.w3.org/2000/svg"
    //   width="1em"
    //   height="1em"
    //   viewBox="0 0 125 11"
    // >
    //   <path d="m62.578 10.038 4.55-4.55h57.851v-.206H67.127L62.577.784 58.08 5.282H.02v.206h58.06zm0-8.944 4.342 4.291-4.342 4.343-4.343-4.343z" />
    // </svg>
    <svg
      width="125"
      height="11"
      viewBox="0 0 125 11"
      fill="currentColor"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M62.5776 10.038L67.1272 5.48838H124.979V5.28159H67.1272L62.5776 0.783691L58.0797 5.28159H0.0206299V5.48838H58.0797L62.5776 10.038ZM62.5776 1.09389L66.9204 5.38499L62.5776 9.72778L58.2348 5.38499L62.5776 1.09389Z" />
    </svg>
  );
};
export default SvgSeparator;
