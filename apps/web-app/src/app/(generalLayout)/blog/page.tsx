import { Group12Icon } from '@code-dudes/fashion-ecommerce/icon';
import { Tag } from '@code-dudes/fashion-ecommerce/ui-kit ';
import Image from 'next/image';

const page = () => {
  const tag = ['#Fashion', '#Tips'];
  return (
    <div>
      <div className="flex flex-col items-center">
        <Image
          width={500}
          height={500}
          alt=""
          src={'/blog/blog1.png'}
          className="w-page h-[221px] "
        />
        <p className="text-[14px]/[21.5px] uppercase text-center">
          2021 Style Guide: The Biggest Fall Trends
        </p>
        <p className="body-medium text-body  ml-[19.92px] mr-[46.07px] ">
          You guys know how much I love mixing high and low-end – it’s the best
          way to get the most bang for your buck while still elevating your
          wardrobe. The same goes for handbags! And honestly they are probably
          the best pieces to mix and match. I truly think the key to completing
          a look is with a great bag and I found so many this year that I wanted
          to share a round-up of my most worn handbags.
        </p>
        <Image
          alt=""
          src={'/blog/blog2.png'}
          width={500}
          height={500}
          className="w-page h-[450.124px] mt-[10.79px] "
        />
        <Group12Icon className="w-[34.198px] h-2 fill-none mt-[14.78px] first-child:fill-[#888888]" />
        <p className="mt-[12.51px] ml-4 mr-[44.59px] text-body body-medium ">
          I found this
          <span className="text-secondary mx-1">
            Saint Laurent canvas handbag
          </span>
          this summer and immediately fell in love. The neutral fabrics are so
          beautiful and I like how this handbag can also carry into fall. The
          mini Fendi bucket bag with the sheer fabric is so fun and such a
          statement bag. Also this DeMellier off white bag is so cute to carry
          to a dinner with you or going out, it’s small but not too small to fit
          your phone and keys still.
        </p>
      </div>
      <div className='className="text-label body-medium  flex mt-[31.62px] ml-4'>
        <p>Posted by OpenFashion |</p>
        <p>3 Days ago </p>
      </div>
      <div className="mt-[8.63px] mx-4 flex flex-wrap gap-[14px]">
        {tag.map((ar) => (
          <Tag styles={'border'} key={ar}>
            {ar}
          </Tag>
        ))}
      </div>
    </div>
  );
};
export default page;
