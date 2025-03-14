import {
  ForwardIcon,
  MasterCardGraphic,
  SeparatorIcon,
} from '@code-dudes/fashion-ecommerce/icon';
import { card } from '@code-dudes/fashion-ecommerce/web-app/components';
const page = () => {
  return (
    <div className="w-page h-[397px] font-TenorSans">
      <p className="title w-[225.508px] h-[32.576px] text-black uppercase mt-[33.75px] ml-[75.58px] text-center">
        Checkout
      </p>
      <SeparatorIcon className="w-[124.959px] h-[9.254px] text-label ml-[125.85px] " />

      <div className="ml-[34.34px]  mt-[25.42px] flex flex-col justify-start">
        <p className="text-[#1a1a1a]  text-[18px]/[16px]    ">Iris Watson</p>
        <div className="flex justify-between gap-[93.66px] items-center">
          <p className="text-label  text-[14px]/[22px] ">
            606-3727 Ullamcorper. Street Roseville NH 11523
          </p>
          <ForwardIcon className="w-5 h-5 text-[#333333] mr-[29px] fill-none" />
        </div>
        <p className="text-label  text-[14px]/[22px] ">(786) 713-8616</p>
      </div>
      <p className="w-[343px] h-[1px]  bg-black ml-4 opacity-10 mt-[22.29px]" />
      <div className="flex ml-[33.9px] mt-[17.35px] items-center">
        <MasterCardGraphic className="w-[52.151px] h-8 " />
        <p className="text-[#17181a] text-[14px]/[16px] ml-[10px]">
          Master Card ending ••••89
        </p>
        <ForwardIcon className="fill-none h-5 w-5  text-[#333333] ml-[41.02px]" />
      </div>
      <p className="w-[343px] h-[1px]  bg-black ml-4 opacity-10 mt-[22.29px]" />
      <div className="mt-[13.94px] ml-4">
        <card
          item={{
            name: 'lamerei',
            details: 'Recycle Boucle Knit Cardigan Pink',
            image: '/Recycle Boucle Knit Cardigan Pink.png',
            price: 120,
            quantity: 1,
          }}
        />
      </div>
    </div>
  );
};
export default page;
