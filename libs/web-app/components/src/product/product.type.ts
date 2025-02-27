import { StaticImageData } from 'next/image';

export type ProductProps = {
  image: string | StaticImageData;
  name: string;
  price: string | number;
};
export type HomePageProductProps = {
  item: ProductProps;
  className?: string;
};
export type FullProductProps = HomePageProductProps & {
  item: HomePageProductProps['item'] & { details: string };
};
export type ListViewProductProps = FullProductProps & {
  item: FullProductProps['item'] & { rating: string | number };
};
export type CartProps = FullProductProps & {
  item: FullProductProps['item'] & { quantity: number | string };
};
