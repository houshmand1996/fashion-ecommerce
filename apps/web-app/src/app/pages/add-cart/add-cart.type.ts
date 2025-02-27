import { Dispatch, FC, SetStateAction, SVGProps } from 'react';

export type CartType = {
  name: string;
  expMonth: string;
  expYear: string;
  cartNumber: string;
};
export type CartSliderType = {
  item: CartType;
  className?: string;
};
export type CartBackgroundType = CartSliderType & {
  item: CartSliderType['item'] & {
    Icon: FC<SVGProps<SVGSVGElement>>;
  };
};
export type InputFormType = CartSliderType & {
  item: CartSliderType['item'] & {
    setExpMonth: Dispatch<SetStateAction<string>>;
    setExpYear: Dispatch<SetStateAction<string>>;
    setCartNumber: Dispatch<SetStateAction<string>>;
    setName: Dispatch<SetStateAction<string>>;
  };
};
