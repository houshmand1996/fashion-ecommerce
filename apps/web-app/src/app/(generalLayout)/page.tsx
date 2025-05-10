import Image from 'next/image';
import {
  Banner,
  NewArrival,
  Brand,
  Collection,
  Product,
  Trending,
  OpenFashion,
  Follow,
} from '../pages/first-page';
import { MediaPlayerIcon } from '@code-dudes/fashion-ecommerce/icon';
export default function Index() {
  return (
    <div id="homePage" className=" w-page h-[4200px] bg-off-white ">
      <Banner />
      <NewArrival />
      <Brand />
      <Collection />
      <div className="h-[176px] w-page mt-10 relative" id="video">
        <Image fill alt="" src={'/image 12.png'} />
        <MediaPlayerIcon
          className="w-[33.27px] h-[33.27px]
        text-opacity-50 absolute  top-[77.84px] left-[187.16px]
        "
        />
      </div>
      <Product />
      <Trending />
      <OpenFashion />
      <Follow />
    </div>
  );
}
