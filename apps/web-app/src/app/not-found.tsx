import {
  BackwardArrowIcon,
  TailorsDummyIcon,
} from '@code-dudes/fashion-ecommerce/icon';
import { Button } from '@code-dudes/fashion-ecommerce/ui-kit';
import { Footer, Header } from '../layout';

const NotFound = () => {
  return (
    <div className="w-page h-[797px]">
      <Header />
      <p className="w-[249.22px] h-[32.576px] title uppercase text-center mt-[33.75px] ml-[63.72px] ">
        PAGE NOT FOUND
      </p>
      <TailorsDummyIcon className="w-[50px] h-[50px] text-primary mt-[62.68px] ml-[162.5px] " />
      <p className="w-[272.08px] h-[69.859px] text-black text-center  text-[18px]/[28px] ml-[51.46px] mt-[22.61px] ">
        We can
        <span>{"'"}</span>t find the page you looking for, it will return to the
      </p>
      <Button
        size={'sm'}
        state={'primary'}
        className="
      ml-[86px] mt-[21.53px] h-10 w-[196px]

      "
      >
        <BackwardArrowIcon
          className="w-6 h-6 text-off-white

        "
        />
        <p className="text-off-white uppercase subtitle-large  !tracking-normal ">
          Home Page
        </p>
      </Button>
      <Footer />
    </div>
  );
};
export default NotFound;
