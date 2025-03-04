import { Dispatch, FC, SetStateAction, SVGProps } from 'react';

export type CardType = {
  name: string;
  expMonth: string;
  expYear: string;
  cardNumber: string;
};
export type CardSliderType = {
  item: CardType;
  className?: string;
};
export type CardBackgroundType = CardSliderType & {
  item: CardSliderType['item'] & {
    Icon: FC<SVGProps<SVGSVGElement>>;
  };
};
export type InputFormType = CardSliderType & {
  item: CardSliderType['item'] & {
    setExpMonth: Dispatch<SetStateAction<string>>;
    setExpYear: Dispatch<SetStateAction<string>>;
    setCardNumber: Dispatch<SetStateAction<string>>;
    setName: Dispatch<SetStateAction<string>>;
  };
};
