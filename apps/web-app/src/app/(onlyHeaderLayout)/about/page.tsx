import {
  ForwardArrowIcon,
  SeparatorIcon,
} from '@code-dudes/fashion-ecommerce/icon';
import { Button, Input } from '@code-dudes/fashion-ecommerce/ui-kit';
import Image from 'next/image';

const page = () => {
  return (
    <div className="flex flex-col items-center mt-[33.75px]">
      <p className="text-center uppercase title">OUR Story</p>
      <SeparatorIcon className="w-[124.959px] h-[9.254px] text-label" />
      <p className="text-body text-[16px]/[20px] ml-[14.41px] mr-4">
        Open Fashion - Free Ecommerce UI Kit is a free download UI kit. You can
        open Open Fashion - Free Ecommerce UI Kit file by Figma.
        <br />
        <br />
        Create stunning shop with bulletproof guidelines and thoughtful
        components. Its library contains more than 50+ components supporting
        Light & Dark Mode and 60+ ready to use mobile screens.
      </p>
      <Image
        className="w-page h-[238.878px] mt-7 "
        alt=""
        src={'/about.png'}
        width={500}
        height={500}
      />
      <p
        className="title mt-[46.62px]
      text-center uppercase"
      >
        Sign Up
      </p>
      <SeparatorIcon className="w-[124.959px] h-[9.254px] text-label" />
      <p className="text-placeholder text-center text-[14px]/[22px] ml-[14.41px] mr-4">
        Receive early access to new arrivals, sales, exclusive content, events
        and much more!
      </p>
      <Input
        sizes={'lg'}
        variant={'default'}
        className="border-b-[1px] mt-[10px]"
        placeholder="Email address"
      />
      <Button
        size={'lg'}
        state={'primary'}
        className="w-full mt-[28.44px]  px-[136px]  tracking-[0.14px]"
      >
        <p>submit</p>
        <ForwardArrowIcon className="w-5 h-5 text-input fill-none" />
      </Button>
    </div>
  );
};
export default page;
