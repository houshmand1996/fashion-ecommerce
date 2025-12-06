'se client';
import { cn } from '@code-dudes/fashion-ecommerce/ui-kit';
import { CollectionType } from 'apps/web-app/src/app/(generalLayout)/collection/page';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
export const SimilarCollection = ({
  collectionLike,
}: {
  collectionLike: CollectionType[] | null;
}) => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    console.log(index);
  }, [index]);
  const route = useRouter();
  if (!collectionLike) return <></>;
  return (
    <div className="mt-[30px] relative">
      <div
        className={cn(
          'flex gap-3 px-4     w-full h-full overflow-hidden'
          // `-translate-x-[${160 * index}px]`
          // '-translate-x-[200px]'
        )}
      >
        {collectionLike.map((ar, i) => (
          <button
            key={ar.collectionId}
            className={cn(
              'flex flex-col w-fit h-fit items-center flex-shrink-0', // index === i && `-translate-x-1/2`
              `translate-x-[-${index * 100}%]`
            )}
            // style={{ translate: `-${100 * index}%` }}
            onClick={() => {
              if (index === i) {
                route.push('/collection/' + ar.collectionId);
              } else setIndex(i);
            }}
          >
            <Image
              width={500}
              height={500}
              alt=""
              src={ar.banner}
              className="w-[254px] h-[300px] "
            />
            <p className="uppercase text-off-white text-[13px]/[29px] tracking-[2px]">
              {ar.collectionName}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
};
