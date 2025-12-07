import {
  BookmarkIcon,
  PlusIcon,
  SeparatorIcon,
} from '@code-dudes/fashion-ecommerce/icon';
import { Button, Tag } from '@code-dudes/fashion-ecommerce/ui-kit';
import { getPosts, Post } from 'apps/web-app/lib/db';
import Image from 'next/image';
import Link from 'next/link';

const page = async () => {
  const tag = ['Fashion', 'Promo', 'Policy', 'Lookbook', 'Sale'];
  const post = (await getPosts().catch((err) => {
    console.log(err);
    return null;
  })) as Post[] | null;

  return (
    <div className="flex flex-col items-center">
      <p className="title text-center uppercase">Blog</p>
      <SeparatorIcon className="w-[124.954px] h-[9.254px] text-label" />
      <div className="inline-flex w-full gap-3 mt-[27.68px]  pl-4 overflow-x-auto hideScrollbar">
        {tag.map((ar) => (
          <Tag key={ar} styles={'fill'} className="">
            {ar}
          </Tag>
        ))}
      </div>

      <div className=" flex gap-[28px] w-page px-4 pt-4 pb-[13.309px] flex-col justify-center items-center">
        {post &&
          post.map((ar) =>
            ar.image ? (
              <Link
                href={'/blog/' + ar.id}
                key={ar.id}
                className="w-[343px] h-[231px] flex flex-col justify-between"
              >
                <div className="relative h-[200px]">
                  <Image fill alt="" src={ar.image} />
                  <p className="subtitle-medium uppercase text-off-white absolute left-[14px] bottom-[13.5px] ">
                    {ar.title}
                  </p>
                  <BookmarkIcon
                    className="w-[18px] h-[18px] stroke-[#fcfcfc] fill-none absolute right-2
                top-[10.67px]
                "
                  />
                </div>
                <div className="flex justify-between">
                  <div className="flex flex-wrap gap-[10px]">
                    {ar.tag &&
                      ar.tag.split('-')?.map((ar) => (
                        <button
                          key={ar}
                          className="inline-flex body-small text-placeholder
                      px-[6px] py-[2px] justify-center items-center gap-[10px] rounded-[20px] border-[1px] border-[#F5F5F5]"
                        >
                          {ar}
                        </button>
                      ))}
                  </div>
                  <p className="text-placeholder body-small">
                    {ar.publishTime}
                  </p>
                </div>
              </Link>
            ) : (
              <div key={ar.id}></div>
            )
          )}
        <Button state={'secondary'} size={'md'} className="mt-[17px] gap-4">
          Load more
          <PlusIcon className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
};
export default page;
