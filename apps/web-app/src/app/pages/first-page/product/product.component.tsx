import { Group12Icon, SeparatorIcon } from '@code-dudes/fashion-ecommerce/icon';
import { HomePageProduct } from '@code-dudes/fashion-ecommerce/web-app/components';
import image from '../../../../../public/Harris Tweed Three button Jacket.png';
export const Product = () => {
  const product1 = {
    name: 'Harris Tweed Three button Jacket',
    image,
    price: 120,
  };
  return (
    <div className="w-page h-[531px] relative">
      <p
        className="text-black text-center title uppercase tracking-[4px] w-[374px] h-[49.3px]
      p-[0px 95.5px 0.746px 96.5px] mt-[72px]
      "
      >
        Just for You
      </p>
      <SeparatorIcon className="w-[124.96px] h-[9.25px] text-label ml-[125px]" />
      <div className="w-[1050px] h-[390px] ml-[16.4px] mr-[-691px] mt-[23px] flex">
        <HomePageProduct
          className="gap-1 pt-[0.271px] pb-[2.09px] h-[390px] w-[255px] first-child:w-[253px] first-child:h-[311.639px] last-child:w-[235px]
          [&>div>p:first-child]:body-large
        "
          item={product1}
        />
        <HomePageProduct
          className="gap-1 pt-[0.271px] pb-[2.09px] h-[390px] w-[255px] first-child:w-[253px] first-child:h-[311.639px] last-child:w-[235px]
          [&>div>p:first-child]:body-large
        "
          item={product1}
        />
      </div>
      <Group12Icon className="w-[34.198px] h-2  fill-none text-[#888888] first-child:fill-current absolute left-[170.2px] bottom-5" />
    </div>
  );
};
