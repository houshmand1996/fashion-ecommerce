import type { FC, SVGProps } from 'react';
const SvgDoorToDoorDelivery: FC<SVGProps<SVGSVGElement>> = (
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
        fill="#000"
        d="M12.946.48a.5.5 0 0 0-.13.022l-7.68 2.4a.48.48 0 0 0-.336.458v17.76a.48.48 0 0 0 .364.466l7.68 1.92a.48.48 0 0 0 .596-.466V.96a.48.48 0 0 0-.494-.48m-.466 1.134v20.811l-6.72-1.68V3.713zm1.92.786v.96h3.84v9.6h.96V2.88a.48.48 0 0 0-.48-.48zm-2.88 9.12c-.127 0-.25.076-.34.211a.93.93 0 0 0-.14.51c0 .19.05.373.14.508s.213.211.34.211.25-.076.34-.21a.93.93 0 0 0 .14-.51.93.93 0 0 0-.14-.509c-.09-.135-.213-.21-.34-.21m3.36 2.4a.48.48 0 0 0-.48.48v6.72a.48.48 0 0 0 .48.48h7.68a.48.48 0 0 0 .48-.48V14.4a.48.48 0 0 0-.48-.48zm.48.96h6.72v5.76h-6.72zm2.4.96a.479.479 0 0 0-.344.822.48.48 0 0 0 .344.138h1.92a.48.48 0 1 0 0-.96z"
      />
    </svg>
  );
};
export default SvgDoorToDoorDelivery;
