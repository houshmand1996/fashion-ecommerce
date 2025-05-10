import { Group12Icon } from '@code-dudes/fashion-ecommerce/icon';
import { Tag } from '@code-dudes/fashion-ecommerce/ui-kit ';
import { getPost } from '../getPost';
import parse, { attributesToProps, Element } from 'html-react-parser';
import DomParser from './domparser';
import Image from 'next/image';
type paramsProp = {
  params: {
    id: string;
  };
};

const Page = async ({ params }: paramsProp) => {
  const { id } = params;
  const post = await getPost({ id });

  const parseTag = parse(post.body);
  const server = 'http://localhost:8000/';
  return (
    <div>
      <div className="flex flex-col items-center">
        <Image
          width={500}
          height={500}
          alt=""
          src={server + post.image}
          className="w-P w-50 h-[221px] h-page mt-[11.47px] "
        />
        <p className="text-[14px]/[21.5px] uppercase text-center">
          {post.title}
        </p>
        <DomParser
          parseTag={parseTag}
          className="body-medium text-body  ml-[19.92px] mr-[46.07px] mt-[9px] first-child:mb-[10.79px] even-child:ml-[140px] even-child:fill-none even-child:text-[#888888] [&>svg>*:first-child]:fill-[#888888] "
        />
      </div>
      <div className='className="text-label body-medium  flex mt-[31.62px] ml-4'>
        <p>Posted by {post.author} |</p>
        <p>{post.publishTime}</p>
      </div>
      <div className="mt-[8.63px] mx-4 flex flex-wrap gap-[14px]">
        {post.tag &&
          post.tag.map((ar) => (
            <Tag styles={'border'} key={ar}>
              {ar}
            </Tag>
          ))}
      </div>
    </div>
  );
};
export default Page;
