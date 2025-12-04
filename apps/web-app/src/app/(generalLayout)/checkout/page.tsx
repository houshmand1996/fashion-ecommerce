import {
  ForwardIcon,
  MasterCardGraphic,
  SeparatorIcon,
} from '@code-dudes/fashion-ecommerce/icon';
import { Cart } from '@code-dudes/fashion-ecommerce/web-app/components';
const page = () => {
  return (
    <div className="w-page h-[397px] font-TenorSans">
      <p className="title w-[225.508px] h-[32.576px] text-black uppercase mt-[33.75px] ml-[75.58px] text-center">
        Checkout
      </p>
      <SeparatorIcon className="w-[124.959px] h-[9.254px] text-label ml-[125.85px] " />

      <p className="w-[343px] h-[1px]  bg-black ml-4 opacity-10 mt-[22.29px]" />
      <p className="w-[343px] h-[1px]  bg-black ml-4 opacity-10 mt-[22.29px]" />
    </div>
  );
};
export default page;
