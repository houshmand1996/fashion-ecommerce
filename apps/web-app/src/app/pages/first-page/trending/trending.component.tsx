import { Tag } from '@code-dudes/fashion-ecommerce/ui-kit ';

export const Trending = () => {
  const trendingText = [
    '#2021',
    '#spring',
    '#collection',
    '#fall',
    '#dress',
    '#autumncollection',
    '#openfashion',
  ];
  return (
    <div className="w-page h-[140px] mt-[38px] ">
      <p
        className="text-black text-center title
    uppercase tracking-[4px] ml-[11px]
    "
      >
        @Trending
      </p>
      <div className="mt-2 ml-2">
        {trendingText.map((ar) => (
          <Tag
            styles={'fill'}
            className="gap-2 !text-[14px]/[16px] text-center tracking-[0.14px] ml-2"
            key={ar}
          >
            {ar}
          </Tag>
        ))}
      </div>
    </div>
  );
};
