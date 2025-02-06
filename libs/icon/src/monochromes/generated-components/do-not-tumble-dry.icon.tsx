import type { FC, SVGProps } from 'react';
const SvgDoNotTumbleDry: FC<SVGProps<SVGSVGElement>> = (
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
      <path stroke="#000" d="M4.386 4.49h15v15h-15z" />
      <path
        fill="#000"
        fillRule="evenodd"
        d="M20.355 16.397 2.248 7.38l.445-.895L20.801 15.5z"
        clipRule="evenodd"
      />
      <path
        fill="#000"
        fillRule="evenodd"
        d="M14.845 14.751a3.997 3.997 0 0 1-6.807-3.39l-.932-.463q-.109.51-.11 1.053a4.997 4.997 0 0 0 8.78 3.264zm-6.53-4.369a3.998 3.998 0 1 1 7.145 3.558l.897.447a4.997 4.997 0 1 0-8.938-4.451z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgDoNotTumbleDry;
