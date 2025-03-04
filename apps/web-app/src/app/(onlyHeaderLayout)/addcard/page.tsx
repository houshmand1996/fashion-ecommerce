'use client';
import { SeparatorIcon } from '@code-dudes/fashion-ecommerce/icon';
import { Button } from '@code-dudes/fashion-ecommerce/ui-kit ';
import { useState } from 'react';
import { CardSlider, InputForm } from '../../pages';

const AddCard = () => {
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expMonth, setExpMonth] = useState('');
  const [expYear, setExpYear] = useState('');
  return (
    <form action="" className="h-full w-page flex-1 relative">
      <p className="w-[312.321px] h-[32.576px] text-black text-center title uppercase ml-[46.19px] mt-[33.75px] ">
        Payment method
      </p>
      <SeparatorIcon className="w-[124.96px] h-[9.25px] text-label ml-[125.85px]" />
      <CardSlider item={{ cardNumber, expMonth, expYear, name }} />

      <InputForm
        item={{
          cardNumber,
          expMonth,
          expYear,
          name,
          setCardNumber,
          setExpMonth,
          setExpYear,
          setName,
        }}
      />
      <Button
        size={'lg'}
        state={'primary'}
        className="absolute bottom-0 left-0 w-page"
      >
        Add Card
      </Button>
    </form>
  );
};
export default AddCard;
