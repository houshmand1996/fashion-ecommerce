import { Button } from '@code-dudes/fashion-ecommerce/ui-kit ';
import image from '../../public/Recycle Boucle Knit Cardigan Pink.png';
import image2 from '../../public/jacket.png';
import { Cart, product, Product } from '../../components';
export default function Index() {
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
        <div className="flex gap-2 justify-around">
          {/* <Product
            type={'gridView'}
            details={'reversible angora cardigan'}
            image={image}
            name="21WN "
            price={'$120'}
            className="bg-orange-400   w-fit"
          />
          <Product
            type={'gridView'}
            details={'reversible angora cardigan'}
            image={image}
            name="21WN "
            price={'$120'}
            className="bg-red-400 w-fit"
          />
          */}
          <Product
            type={'full'}
            details={'Recycle Boucle Knit Cardigan Pink'}
            image={image2}
            name="lamerei"
            price={'$120'}
            rating={4.8}
            className="bg-slate-300 "
          />
        </div>
      </div>
    </div>
  );
}
