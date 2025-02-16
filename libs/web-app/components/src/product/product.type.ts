import { StaticImageData } from 'next/image';

export type ProductProps = {
  image: string | StaticImageData;
  name: string;
  price: string | number;
};
export type HomePageProductProps = {
  item: ProductProps;
  className: string;
};
export type FullProductProps = {
  item: ProductProps & { details: string };
  className: string;
};
export type ListViewProductProps = {
  item: ProductProps & { details: string; rating: string | number };
  className: string;
};
