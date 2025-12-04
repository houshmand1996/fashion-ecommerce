import type { FC, SVGProps } from 'react';
const SvgYouTube: FC<SVGProps<SVGSVGElement>> = (
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
      <path d="M12.5 3.984c-3.349 0-7.695.839-7.695.839l-.011.012A3.19 3.19 0 0 0 2.1 7.984v9.602a3.2 3.2 0 0 0 2.702 3.154l.003.005s4.346.84 7.695.84 7.695-.84 7.695-.84l.002-.002a3.2 3.2 0 0 0 2.703-3.157V7.983a3.2 3.2 0 0 0-2.702-3.156l-.003-.005s-4.346-.84-7.695-.84m-2.4 5.119 6.4 3.68-6.4 3.682z" />
    </svg>
  );
};
export default SvgYouTube;
