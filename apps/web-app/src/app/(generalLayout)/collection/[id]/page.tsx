import { SeparatorIcon } from '@code-dudes/fashion-ecommerce/icon';
import { GridViewProduct } from '@code-dudes/fashion-ecommerce/web-app/components';
import { getCollections, getRandomCollection } from 'apps/web-app/lib/db';
import { CollectionType } from 'apps/web-app/src/app/(generalLayout)/collection/page';
import { SimilarCollection } from 'apps/web-app/src/app/pages/collection';
import Image from 'next/image';
import Link from 'next/link';

const page = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const collection = (await getCollections(id)) as
    | (modules.IProduct & CollectionType)[]
    | null;
  const collectionLike = (await getRandomCollection({
    id,
  })) as CollectionType[] | null;

  const name = collection && collection[0]?.collectionName.split(' ');
  if (collection)
    return (
      <div className="flex w-page pt-[29.57px] items-center flex-col bg-[#111] pb-[59px] ">
        <p className="text-[#343434] text-[173.5px]/[126px] absolute  text-opacity-50 z-0">
          10
        </p>
        <p className="text-off-white text-[41px]/[62px] tracking-[2px] mt-[25.54px] font-BodoniModa z-50 absolute ">
          {name && name[0]}
        </p>
        <p className="uppercase text-off-white text-[12.93px]/[29px] tracking-[6.06px] z-50 mt-[72.86px] ">
          {name && name[1]}
        </p>
        <Image
          height={500}
          width={500}
          alt=""
          className="w-[343px] h-[456px] z-50"
          src={collection[0].banner}
        />
        <div className="flex flex-wrap gap-3 items-center justify-center  mt-[28.5px] ">
          {collection.map((ar, i) => (
            <Link href={`/products/${ar.id}`} key={i}>
              <GridViewProduct darkTheme item={ar} />
            </Link>
          ))}
        </div>
        {collectionLike && (
          <div className="flex flex-col items-center">
            <p className="text-off-white title tracking-[4px] uppercase">
              You may also like
            </p>
            <SeparatorIcon className="w-[124px] h-[9px] text-off-white" />
            <SimilarCollection collectionLike={collectionLike} />
          </div>
        )}
      </div>
    );
  return <>something went wrong</>;
};

export default page;
