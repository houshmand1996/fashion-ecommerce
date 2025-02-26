import image1 from 'apps/web-app/public/Recycle Boucle Knit Cardigan Pink.png';
import image2 from 'apps/web-app/public/niceShoe.png';
import image3 from 'apps/web-app/public/Rectangle 325.png';
import image4 from 'apps/web-app/public/women.handbag.png';
import { HomePageProduct } from '@code-dudes/fashion-ecommerce/web-app/components';
export const Products = () => {
  const product1 = {
    image: image1,
    name: '21WN reversible angora cardigan',
    price: 120,
  };
  const product2 = { ...product1, image: image2 };
  const product3 = { ...product1, image: image3 };
  const product4 = { ...product1, image: image4, name: 'Oblong bag' };
  return (
    <div className="mt-[6.95px] mx-4 flex gap-[13px] flex-wrap">
      <HomePageProduct className="gap-1 pb-[0.156px]" item={product1} />
      <HomePageProduct className="" item={product2} />
      <HomePageProduct className="" item={product3} />
      <HomePageProduct className="gap-[11px] justify-normal" item={product4} />
    </div>
  );
};
