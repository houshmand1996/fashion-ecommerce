import { getCollections } from 'apps/web-app/lib/db';
import Image from 'next/image';
import Link from 'next/link';

export type CollectionType = {
  collectionId: string;
  collectionName: string;
  banner: string;
};
const page = async () => {
  const collection = (await getCollections()) as CollectionType[] | null;
  return (
    <div className="flex w-page pt-[29.57px] items-center flex-col bg-[#111] pb-[59px] ">
      <p className="text-[#343434] text-[173.5px]/[126px] absolute  text-opacity-50 z-0">
        10
      </p>
      <p className="text-off-white text-[41px]/[62px] tracking-[2px] mt-[25.54px] font-BodoniModa z-50 absolute ">
        October
      </p>
      <p className="uppercase text-off-white text-[12.93px]/[29px] tracking-[6.06px] z-50 mt-[72.86px] ">
        collection
      </p>
      <div className="mt-[6px] flex flex-col gap-[35px] items-center z-50">
        {collection &&
          collection.map((ar, i) => (
            <Link href={'/collection/' + ar.collectionId} key={i}>
              <Image
                height={500}
                width={500}
                src={ar.banner}
                alt=""
                className="w-[343px] h-[456px]"
              />
              <div className="flex justify-between">
                <div className="flex items-center gap-[9.73px]">
                  <p className="font-BodoniModa font-black text-[12.93px]/[29.09px] tracking-[2px] uppercase text-off-white ">
                    {i + 1 > 9 ? i + 1 : `0${i + 1}`}
                  </p>
                  <p className=" w-[109px] bg-[#fff] opacity-10 h-[1px] " />
                </div>
                <p className="text-[12.93px]/[29px] text-off-white tracking-[2px] uppercase ">
                  {ar.collectionName}
                </p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default page;
