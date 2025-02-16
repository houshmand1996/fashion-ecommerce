import { StaticImageData } from 'next/image';

export type product = {
  image: string | StaticImageData;
  name: string;
  price: string | number;
};
