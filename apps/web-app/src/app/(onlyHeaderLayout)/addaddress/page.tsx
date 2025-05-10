import { SeparatorIcon } from '@code-dudes/fashion-ecommerce/icon';
import { Button, Input } from '@code-dudes/fashion-ecommerce/ui-kit ';

const page = () => {
  const name = [
    'First name',
    'Last name',
    'Address',
    'City',
    'State',
    'ZIP code',
    'Phone number',
  ];
  return (
    <form className="relative w-full h-full flex-1">
      <p className="title uppercase text-center ml-[32.17px] mt-[33.75px] mr-[29px] ">
        Add shipping address
      </p>
      <SeparatorIcon className="w-[124.959px] h-[9.254px] text-label ml-[125.85px]" />
      <div className="flex *:border-b-[1px] mt-[26.42px] flex-wrap *:mt-5">
        {name.map((ar, index) => (
          <Input
            key={ar}
            placeholder={ar}
            variant={'default'}
            name={ar}
            sizes={[0, 1, 4, 5].includes(index) ? 'sm' : 'lg'}
            className={[1, 5].includes(index) ? 'ml-3' : ''}
          />
        ))}
      </div>
      <Button
        size={'lg'}
        state={'primary'}
        className="absolute bottom-0 left-0 w-full"
      >
        Add now
      </Button>
    </form>
  );
};
export default page;
