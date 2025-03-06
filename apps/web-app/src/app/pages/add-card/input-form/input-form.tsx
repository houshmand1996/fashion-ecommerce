import { Input } from '@code-dudes/fashion-ecommerce/ui-kit';
import { FC } from 'react';
import { InputFormType } from '../add-card.type';

export const InputForm: FC<InputFormType> = ({ item }) => {
  const {
    cardNumber,
    expMonth,
    expYear,
    name,
    setCardNumber,
    setExpMonth,
    setExpYear,
    setName,
  } = item;
  return (
    <div className="mt-[8.27px] *:border-b-[1px] flex flex-col gap-5">
      <Input
        placeholder="Name On Card"
        sizes={'lg'}
        variant={'default'}
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="capitalize"
      />
      <Input
        placeholder="card number"
        onChange={(e) => {
          if (e.currentTarget.value.length <= 19) {
            let value = e.target.value.replace(/\D/g, ''); // Remove non-digit characters
            value = value.match(/.{1,4}/g)?.join('-') || value; // Add dash every 4 digits
            setCardNumber(value);
          }
        }}
        value={cardNumber}
        variant={'default'}
        sizes={'lg'}
      />
      <div className="flex  border-none *:border-b-[1px] ">
        <Input
          placeholder="exp month"
          value={expMonth}
          onChange={(e) => {
            const value = e.target.value;
            if (/^([0][1-9]?|[1][0-2]?)$/.test(value) || value === '') {
              setExpMonth(value);
            }
          }}
          name="exp month"
          variant={'default'}
          sizes={'sm'}
          className="   "
        />
        <Input
          placeholder="exp date"
          name="exp date"
          onChange={(e) => {
            const value = e.target.value;
            if (/^([0-9][0-9]?)$/.test(value) || value === '') {
              setExpYear(value);
            }
          }}
          value={expYear}
          variant={'default'}
          sizes={'sm'}
          className="   ml-3"
        />
      </div>
      <Input placeholder="CVV" name="CVV" variant={'default'} sizes={'lg'} />
    </div>
  );
};
