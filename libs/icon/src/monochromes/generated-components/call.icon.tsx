import type { FC, SVGProps } from 'react';
const SvgCall: FC<SVGProps<SVGSVGElement>> = (
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
      <path d="m15.972 1.828 6.364.707s.707 6.364-6.364 13.436C8.9 23.04 2.536 22.336 2.536 22.336l-.708-6.364 4.952-2.829 2.474 2.475s1.768-.354 3.889-2.475 2.475-3.89 2.475-3.89L13.143 6.78z" />
    </svg>
  );
};
export default SvgCall;
