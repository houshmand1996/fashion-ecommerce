import { cn, Input } from '@code-dudes/fashion-ecommerce/ui-kit ';
import { FC } from 'react';
import { InputFormType } from '../add-card.type';
import {
  FormItemTitle,
  FormItem,
  FormItemDescription,
  FormItemInner,
  FormItemInput,
} from '@code-dudes/fashion-ecommerce/web-app/components';

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
    cvv,
    setCvv,
  } = item;
  const isDate = !!expMonth || !!expYear;
  return (
    <div className="mt-[8.27px]  flex flex-col gap-5">
      {/* <div className=" outline-none ml-4">
        <div
          className={cn(
            'flex flex-col  bg-white border-[#d4d4d4] w-[342px] h-[50px] gap-[5.6px] border-b-[1px]',
            !name && 'justify-center'
          )}
        >
          <p className="text-[#979797] text-[12px]/[14px] border-none">
            {name && 'Name On Card'}
          </p>
          <input
            placeholder="Name On Card"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className=" placeholder-[#979797] placeholder:text-[15px] text-[16px] text-body outline-none capitalize"
          />
        </div>
        {name && (
          <p className="text-[#aaa] text-[12px]/[20px]">
            *Please enter your exactly as it appears on your card
          </p>
        )}
      </div> */}
      <FormItem>
        <FormItemInner className={!name ? 'justify-center' : ''}>
          <FormItemTitle>{name && 'Name On Card'}</FormItemTitle>
          <FormItemInput
            placeholder="Name On Card"
            value={name}
            onChange={(e) => {
              const value = e.target.value.replace(/[^a-zA-Z\s]+/g, '');
              setName(value.trimStart());
            }}
          />
        </FormItemInner>
        {name && (
          <FormItemDescription>
            *Please enter your exactly as it appears on your card
          </FormItemDescription>
        )}
      </FormItem>
      <FormItem>
        <FormItemInner className={!cardNumber ? 'justify-center' : ''}>
          <FormItemTitle>{cardNumber && 'card number'}</FormItemTitle>
          <FormItemInput
            placeholder="card number"
            value={cardNumber}
            onChange={(e) => {
              if (e.currentTarget.value.length <= 19) {
                let value = e.target.value.replace(/\D/g, ''); // Remove non-digit characters
                value = value.match(/.{1,4}/g)?.join('-') || value; // Add dash every 4 digits
                setCardNumber(value);
              }
            }}
          />
        </FormItemInner>
        {cardNumber && (
          <FormItemDescription>
            *Please enter your exactly as it appears on your card
          </FormItemDescription>
        )}
      </FormItem>
      <FormItem>
        <div className=" flex gap-3">
          <FormItemInner
            className={cn('w-[155px] ', !expMonth ? 'justify-center' : '')}
          >
            <FormItemTitle>{expMonth && 'expMonth'}</FormItemTitle>
            <FormItemInput
              placeholder="exp month"
              value={expMonth}
              onChange={(e) => {
                const value = e.target.value;
                if (/^([0][1-9]?|[1][0-2]?)$/.test(value) || value === '') {
                  setExpMonth(value);
                }
              }}
              name="exp month"
              className=" "
            />
          </FormItemInner>

          <FormItemInner
            className={cn('w-[155px]', !expYear ? 'justify-center' : '')}
          >
            <FormItemTitle>{expYear && 'exp date'}</FormItemTitle>
            <FormItemInput
              placeholder="exp date"
              value={expYear}
              onChange={(e) => {
                const value = e.target.value;
                if (/^([0-9][0-9]?)$/.test(value) || value === '') {
                  setExpYear(value);
                }
              }}
              name="exp date"
              className=" "
            />
          </FormItemInner>
        </div>
        {isDate && (
          <FormItemDescription>
            *Please enter your exactly as it appears on your card
          </FormItemDescription>
        )}
      </FormItem>
      <FormItem>
        <FormItemInner className={!cvv ? 'justify-center' : ''}>
          <FormItemTitle>{cvv && 'cvv'}</FormItemTitle>
          <FormItemInput
            placeholder="cvv"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            name="cvv"
          />
        </FormItemInner>
      </FormItem>
    </div>
  );
};
