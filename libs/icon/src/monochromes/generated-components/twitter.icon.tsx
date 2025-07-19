import type { FC, SVGProps } from 'react';
const SvgTwitter: FC<SVGProps<SVGSVGElement>> = (
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
      <path d="M22.9 6.333a8.5 8.5 0 0 1-2.451.672 4.28 4.28 0 0 0 1.876-2.36 8.6 8.6 0 0 1-2.71 1.036 4.268 4.268 0 0 0-7.271 3.891 12.12 12.12 0 0 1-8.797-4.46A4.26 4.26 0 0 0 2.97 7.26c0 1.48.753 2.786 1.898 3.551a4.26 4.26 0 0 1-1.933-.534v.054a4.27 4.27 0 0 0 3.423 4.184 4.3 4.3 0 0 1-1.927.074 4.27 4.27 0 0 0 3.987 2.964 8.56 8.56 0 0 1-6.319 1.767 12.1 12.1 0 0 0 6.542 1.917c7.85 0 12.14-6.503 12.14-12.142q0-.277-.011-.552a8.7 8.7 0 0 0 2.13-2.209" />
    </svg>
  );
};
export default SvgTwitter;
