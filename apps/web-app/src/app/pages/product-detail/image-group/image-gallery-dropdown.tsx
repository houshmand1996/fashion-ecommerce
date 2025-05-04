import {
  CloseIcon,
  NwarrowIcon,
  SearrowIcon,
} from '@code-dudes/fashion-ecommerce/icon';
import {
  cn,
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from '@code-dudes/fashion-ecommerce/ui-kit';
import { Dropdown } from '@code-dudes/fashion-ecommerce/web-app/components';
import { imageLoader } from 'apps/web-app/lib/image-loader';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const ImageGalleryDropdown = ({ images }: { images: string[] }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [image, setImage] = useState(0);
  useEffect(() => {
    if (isMenuOpen) {
      // document.body.classList.remove('min-h-svh');
      document.body.classList.replace('overflow-x-clip', 'overflow-hidden');
    } else {
      // document.body.classList.add('min-h-svh');
      document.body.classList.replace('overflow-hidden', 'overflow-x-clip');
    }
  }, [isMenuOpen]);

  return (
    <Dialog>
      <DialogTrigger
        className="absolute bottom-0 right-0 rounded-full bg-black bg-opacity-35 w-9 h-9 p-0"
        asChild
      >
        <button>
          <div className="w-full h-full relative text-white">
            <NwarrowIcon className="w-[15px] h-[15px] fill-none  absolute top-[6px] right-[6px]" />
            <SearrowIcon className="w-[15px] h-[15px] fill-none absolute bottom-[6px] left-[6px]" />
          </div>
        </button>
      </DialogTrigger>
      <DialogContent className="backdrop:bg-black/90 backdrop:blur-[2px] min-w-full  min-h-full bg-transparent relative overflow-clip ">
        <DialogClose
          className="mt-[10px] ml-4 absolute top-[22.22px] right-4"
          onClick={() => setIsMenuOpen(false)}
        >
          <CloseIcon className="w-6 h-6 text-off-white" />
        </DialogClose>
        <Image
          className="absolute top-[79.31px] w-full h-[500px]"
          alt=""
          src={images[image]}
          loader={imageLoader}
          width={500}
          height={500}
          loading="eager"
        />
        <div className="absolute right-4 top-[319.22px] flex flex-col gap-[6px]">
          {images.map((_ar, i) => (
            <button
              key={i}
              className={cn(
                'w-2 h-2 rotate-[135deg]',
                i === image ? 'bg-primary' : ' bg-input '
              )}
              onClick={() => {
                setImage(i);
              }}
            />
          ))}
        </div>
        <button
          onClick={() => setImage(images.length > image + 1 ? image + 1 : 0)}
        >
          <Image
            className="absolute top-[591.31px] w-full h-[500px]"
            alt=""
            src={images.length > image + 1 ? images[image + 1] : images[0]}
            loader={imageLoader}
            width={500}
            height={500}
            loading="eager"
          />
        </button>
      </DialogContent>
    </Dialog>
  );
};
export default ImageGalleryDropdown;
