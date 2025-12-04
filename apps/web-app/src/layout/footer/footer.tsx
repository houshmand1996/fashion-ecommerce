import Link from 'next/link';
import {
  InstagramIcon,
  TwitterIcon,
  YouTubeIcon,
  SeparatorIcon,
} from '@code-dudes/fashion-ecommerce/icon';

export const Footer = () => {
  return (
    <footer className="  min-w-[375px] w-full h-[340px] bg-white flex flex-col flex-shrink-0 items-center ">
      <div className="w-full h-[70px] flex items-center ">
        <Link href={'https://twitter.com/'} className="">
          <TwitterIcon className="text-body w-6 h-6 ml-[106.5px]" />
        </Link>
        <Link href={'www.instagram.com'}>
          <InstagramIcon className="ml-[45px] h-6 w-6 text-body" />
        </Link>
        <Link href={'www.youtube.com'}>
          <YouTubeIcon className="h-6 w-6 text-body ml-[45px]" />
        </Link>
      </div>
      <SeparatorIcon className="w-60 h-[9px] text-label mb-[18px]" />
      <div
        className={
          'w-[184px] h-[116px]   text-body text-center footer leading-[1.84rem]'
        }
      >
        support@openui.design +60 825 876 <br />
        08:00 - 22:00 - Everyday
      </div>
      <SeparatorIcon className="w-60 h-[9px] text-label mb-2" />
      <div className="w-full w-min-[375px] h-[55px] flex items-center pt-[10px] footer text-black text-center ">
        <Link href={'/about'} className="ml-[58px]">
          About
        </Link>
        <Link href={'/contactUs'} className="ml-[52px]">
          Contact
        </Link>
        <Link href={'/blog'} className="ml-[52px]">
          Blog
        </Link>
      </div>
      <div className="min-w-[375px] h-[45.246px] flex-shrink-0 bg-footer relative mt-2">
        <p className="text-label text-center body-small ml-[68.5px] w-[238px] h-[19px] absolute bottom-[15.8px]">
          Copyright© OpenUI All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};
