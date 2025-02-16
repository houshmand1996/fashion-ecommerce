import { Button } from '@code-dudes/fashion-ecommerce/ui-kit ';
import image from '../../public/Recycle Boucle Knit Cardigan Pink.png';
import image2 from '../../public/jacket.png';
import {
  FullProduct,
  GridViewProduct,
  HomePageProduct,
  ListViewProduct,
} from '@fashion-ecommerce/component';
export default function Index() {
  const item = {
    name: '21WN',
    image,
    price: 120,
    details: 'reversible angora cardigan',
    rating: 120,
  };
  return (
    <div className="container bg-secondary h-full w-full flex-1 min-h-fit">
      <div id="welcome" className="flex flex-col min-h-min">
        <h1>
          <span className="text-primary-default"> Hello there, ali</span>
          Welcome web-app 👋
        </h1>
        <Button state={'primary'} size={'sm'} className="gap">
          button
        </Button>
        {/* <Cart className="bg-slate-200" /> */}
        <div className="flex gap-2 justify-around flex-wrap">
          <GridViewProduct item={item} className="bg-orange-400   h-fit" />
          <HomePageProduct className="bg-red-400 h-fit" item={item} />

          <FullProduct item={item} className="bg-slate-300" />

          <ListViewProduct item={item} className="bg-blue-500 " />
        </div>
      </div>
    </div>
  );
}
