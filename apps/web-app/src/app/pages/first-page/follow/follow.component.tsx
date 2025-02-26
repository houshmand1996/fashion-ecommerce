import { InstagramIcon } from '@code-dudes/fashion-ecommerce/icon';
import Image from 'next/image';
import image1 from 'apps/web-app/public/@mia0.png';
import image2 from '../../../../../public/@_jihyn0.png';
export const Follow = () => {
  const followText = Array(4)
    .fill(0)
    .map((_ar, i) => i + 1);

  return (
    <div className="w-page h-[460px]">
      <p
        className="title text-black text-center
        uppercase tr
        "
      >
        Follow Us
      </p>
      <InstagramIcon
        className="w-6 h-6 text-body ml-[176px] 
          mt-[2px] fill-none
          "
      />
      <div className="flex gap-[14px] flex-wrap px-4 mt-[18px]">
        {followText.map((ar) => (
          <div className="w-[164px] h-[164px] relative " key={ar}>
            <Image alt="" src={`/follow/image${ar}.png`} fill />
            <p className="text-white text-center text-[14px] font-TenorSans tracking-[1px] absolute bottom-3 left-[9px]">
              {ar % 2 ? '@mia' : '@_jihyn'}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
