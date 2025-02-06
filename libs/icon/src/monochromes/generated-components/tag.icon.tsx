import type { FC, SVGProps } from 'react';
const SvgTag: FC<SVGProps<SVGSVGElement>> = (
  props: SVGProps<SVGSVGElement>
) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="currentColor"
      viewBox="0 0 25 25"
      {...props}
    >
      <g stroke="#14142B">
        <path d="M12.535 1.222 24.284 12.97 12.97 24.284 1.221 12.535l.436-10.878z" />
        <circle cx={8.141} cy={7.557} r={1} />
      </g>
    </svg>
  );
};
export default SvgTag;
