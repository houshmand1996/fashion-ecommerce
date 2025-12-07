import { Group12Icon } from '@code-dudes/fashion-ecommerce/icon';
import { Tag } from '@code-dudes/fashion-ecommerce/ui-kit';
import parse, { attributesToProps, Element } from 'html-react-parser';
import DomParser from './domparser';
import Image from 'next/image';
import { getPosts, Post } from 'apps/web-app/lib/db';
type paramsProp = {
  params: {
    id: string;
  };
};

const Page = async ({ params }: paramsProp) => {
  const { id } = params;
  const post = (await getPosts(id).catch((err) => {
    console.log(err);
    return null;
  })) as Post[] | null;

  const newPost = post && post[0];

  const parseTag = parse(newPost?.body || '');
  if (newPost)
    return (
      <div>
        <div className="flex flex-col items-center">
          <Image
            width={500}
            height={500}
            alt=""
            src={newPost?.image}
            className="w-P w-50 h-[221px] h-page mt-[11.47px] "
          />
          <p className="text-[14px]/[21.5px] uppercase text-center">
            {newPost.title}
          </p>
          <DomParser
            parseTag={parseTag as string}
            className="body-medium text-body  ml-[19.92px] mr-[46.07px] mt-[9px] first-child:mb-[10.79px] even-child:ml-[140px] even-child:fill-none even-child:text-[#888888] [&>svg>*:first-child]:fill-[#888888] "
          />
        </div>
        <div className='className="text-label body-medium  flex mt-[31.62px] ml-4'>
          <p>Posted by {newPost.author} |</p>
          <p>{newPost.publishTime}</p>
        </div>
        <div className="mt-[8.63px] mx-4 flex flex-wrap gap-[14px]">
          {newPost.tag &&
            newPost.tag.split('-')?.map((ar) => (
              <Tag styles={'border'} key={ar}>
                {ar}
              </Tag>
            ))}
        </div>
      </div>
    );
};
export default Page;
