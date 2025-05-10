import { HomePageProduct } from '@code-dudes/fashion-ecommerce/web-app/components';
export const Products = () => {
  const product1 = {
    image: '/Recycle Boucle Knit Cardigan Pink.png',
    name: '21WN reversible angora cardigan',
    price: 120,
  };
  const product2 = { ...product1, image: '/niceShoe.png' };
  const product3 = { ...product1, image: '/Rectangle 325.png' };
  const product4 = {
    ...product1,
    image: '/women.handbag.png',
    name: 'Oblong bag',
  };
  return (
    <div className="mt-[6.95px] mx-4 flex gap-[13px] flex-wrap">
      <HomePageProduct className="gap-1 pb-[0.156px]" item={product1} />
      <HomePageProduct className="" item={product2} />
      <HomePageProduct className="" item={product3} />
      <HomePageProduct className="gap-[11px] justify-normal" item={product4} />
    </div>
  );
};
