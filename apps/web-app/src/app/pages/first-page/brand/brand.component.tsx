import {
  BossIcon,
  BurberryIcon,
  CatierIcon,
  GucciIcon,
  PradaIcon,
  SeparatorIcon,
  TiffanyCoIcon,
} from '@code-dudes/fashion-ecommerce/icon';

export const Brand = () => {
  return (
    <div className="w-page h-[180px] flex-shrink-0">
      <SeparatorIcon className=" w-[124.96px] h-[9.25px] text-label flex-shrink-0  ml-[126px] mt-[33px]" />
      <div className="justify-between items-center  flex h-[128.26px] w-page  flex-wrap">
        <PradaIcon className="w-[69.32px] h-[10.69px] flex-shrink-0  ml-[32.24px] " />
        <BurberryIcon className="w-[98.32px] h-[20px] text-body flex-shrink-0  mr-5" />
        <BossIcon className="w-[52px] h-[19.73px] flex-shrink-0 mr-[45.1px] " />
        <CatierIcon className="w-[72.175px] h-[20px] flex-shrink-0 text-body ml-[26.65px]  " />
        <GucciIcon className="w-[94.26px] h-[14.71px] flex-shrink-0    " />
        <TiffanyCoIcon className="w-[98.36px] h-[12.64px] flex-shrink-0 mr-[19.8px] " />
      </div>
      <SeparatorIcon className="w-[124.96px] h-[9.25px] flex-shrink-0 text-label ml-[126px] mb-[12.2px]" />
    </div>
  );
};
