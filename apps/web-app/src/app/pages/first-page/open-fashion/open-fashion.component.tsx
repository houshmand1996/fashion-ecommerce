import { LogoIcon, SeparatorIcon } from '@code-dudes/fashion-ecommerce/icon';
import image from '../../../../../public/Miroodles Sticker.png';
import image1 from '../../../../../public/Miroodles Sticker(1).png';
import image2 from '../../../../../public/Miroodles Sticker(2).png';
import image3 from '../../../../../public/Miroodles Sticker(3).png';
import Image from 'next/image';
export const OpenFashion = () => {
  return (
    <div className="w-page h-[456px] mt-[22px] relative">
      <LogoIcon
        className="w-[97.606px] h-10
      pt-[1.08px] pb-[0.05px] top-[27.56px] absolute left-[133.9px]
      "
      />
      <div
        className="w-[338px] h-[352.87px]
      top-[83.73px] left-[15.51px] absolute
      "
      >
        <p className="w-[285.04px] h-[65.63px] text-label text-center subtitle-medium tracking-[0.14px] ml-[28.9px]">
          Making a luxurious lifestyle accessible for a generous group of women
          is our daily drive.
        </p>
        <SeparatorIcon className="w-[124.96px] h-[9.254px] text-label mt-[4.94px] ml-[122px]" />
        <div className="flex flex-wrap justify-between">
          <div className="w-[165px] h-[86.879px]  mt-[13.6px] ">
            <Image
              alt=""
              src={image}
              className="w-[49.77px] h-[34.915px] ml-[59.5px] "
            />
            <p className="text-label text-center font-TenorSans text-[13px]/[20px] mt-[11.96px]">
              Fast shipping. Free on orders over $25.
            </p>
          </div>
          <div className="w-[129px] h-[85.694px]  mt-[18.7px] mr-[10.1px]">
            <Image
              alt=""
              src={image1}
              className="w-[52.453px] h-[36.797px] ml-[32px] "
            />
            <p className="text-label text-center font-TenorSans text-[13px]/[20px] mt-[8.9px]">
              Sustainable process from start to finish.
            </p>
          </div>
          <div className="w-[165px] h-[81.8px]  mt-[18.3px]">
            <Image
              alt=""
              src={image2}
              className="w-[54.353px] h-[38.13px] ml-[55.6px] "
            />
            <p className="text-label text-center font-TenorSans text-[13px]/[20px] ">
              Unique designs and high-quality materials.
            </p>
          </div>
          <div className="w-[155px] h-[81.8px]  mt-[18.3px]">
            <Image
              alt=""
              src={image3}
              className="w-[54.353px] h-[38.13px] ml-[55.6px] "
            />
            <p className="text-label text-center font-TenorSans text-[13px]/[20px] ">
              Fast shipping. Free on orders over $25.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
