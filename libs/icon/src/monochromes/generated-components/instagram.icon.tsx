import type { FC, SVGProps } from 'react';
const SvgInstagram: FC<SVGProps<SVGSVGElement>> = (
  props: SVGProps<SVGSVGElement>
) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="currentColor"
      stroke="currentColor"
      viewBox="0 0 25 25"
      {...props}
    >
      <path d="M8.498 3.184A5.607 5.607 0 0 0 2.9 8.785v8a5.607 5.607 0 0 0 5.602 5.599h8a5.607 5.607 0 0 0 5.598-5.602v-8a5.607 5.607 0 0 0-5.602-5.598zm9.602 3.2a.8.8 0 1 1 0 1.6.8.8 0 0 1 0-1.6m-5.6 1.6c2.647 0 4.8 2.152 4.8 4.8s-2.153 4.8-4.8 4.8a4.805 4.805 0 0 1-4.8-4.8c0-2.648 2.153-4.8 4.8-4.8m0 1.6a3.2 3.2 0 1 0 0 6.399 3.2 3.2 0 0 0 0-6.4" />
    </svg>
  );
};
export default SvgInstagram;
