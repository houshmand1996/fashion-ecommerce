'use client';
import { cn } from '@code-dudes/fashion-ecommerce/ui-kit';
import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';
import ImageGalleryDropdown from './image-gallery-dropdown';

export const ImageGroup = ({
  images,
  picture,
  setPicture,
}: {
  images: string[];
  picture: number;
  setPicture: Dispatch<SetStateAction<number>>;
}) => {
  return (
    <div
      id="imageGroup"
      className="w-full flex flex-col justify-center items-center "
    >
      <div className="relative h-[460px] w-[343px] mt-5">
        <Image fill alt="" sizes="100vw" src={images[picture]} />

        <ImageGalleryDropdown images={images} />
      </div>
      <div>
        {Array(images.length)
          .fill(0)
          .map((_ar, i) => (
            <button
              onClick={() => setPicture(i)}
              key={i}
              className={cn(
                'w-2 h-2  mr-[5px] rotate-45 border-[1px] border-[#888]',
                i == picture && 'bg-[#888] border-2'
              )}
            />
          ))}
      </div>
    </div>
  );
};
