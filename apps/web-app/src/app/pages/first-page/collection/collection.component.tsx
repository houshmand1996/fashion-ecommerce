import Image from 'next/image';
export const Collection = () => {
  return (
    <div className="w-page h-[640px] flex-shrink-0 mt-[47px] mb-2 flex flex-col items-center">
      <p className="text-black uppercase title tracking-[4px] Collections ">
        Collections
      </p>
      <div className="w-page h-60  mt-4 relative overflow-x-hidden">
        <Image alt="" src={'public/collection.png'} fill />
        <p className="w-[200px] h-[244.37px] flex-shrink-0 text-body font-BodoniModa italic text-[162.7px]/[244px] font-extrabold tracking-[-31.5px] absolute top-[22.74px]  left-[187.93px] opacity-50 mix-blend-multiply">
          10
        </p>
        <p className="w-[172.52px] h-[62.88px] flex-shrink-0 text-off-white font-BodoniModa text-[41.87px]/[62.8px] font-bold top-[99.52px] left-[212.21px] absolute">
          October
        </p>
        <p className="w-[145.59px] h-[29.12px] flex-shrink-0 text-off-white font-TenorSans text-[12.93px]/[29.1px] tracking-[6.06px] uppercase absolute top-[143.36px] left-[210.53px] ">
          Collection
        </p>
      </div>
      <div className="w-[260px] h-[296px]  mt-[35.46px] relative">
        <Image alt="" src={'public/AutumnCollection.png'} fill />
        <p className="w-[172.52px] h-[62.88px] flex-shrink-0 text-body font-BodoniModa text-[41.87px]/[62.8px] font-bold italic tracking-[-1px] opacity-80 mix-blend-multiply top-[32.67px] left-[85.83px] absolute">
          Autumn
        </p>
        <p
          className="w-[127.49px] h-[25.497px] flex-shrink-0 text-body text-[11.322px]/[25.4755px] tracking-[5.31px] uppercase absolute
          left-[102.9px] top-[77.82px]"
        >
          Collection
        </p>
      </div>
    </div>
  );
};
