import { Button } from '@code-dudes/fashion-ecommerce/ui-kit ';
import {
  BackIcon,
  NwarrowIcon,
  BackwardArrowIcon,
} from '@code-dudes/fashion-ecommerce/icon';
import { Poppins, Tenor_Sans } from 'next/font/google';
import { cn } from 'libs/ui-kit/src/lib';
const inter = Tenor_Sans({
  weight: '400',
  display: 'swap',
  subsets: ['latin'],
});

export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.tailwind file.
   */
  return (
    <div>
      <div className="wrapper">
        <div className="container bg-secondary">
          <div id="welcome" className="flex flex-col">
            <h1>
              <span className="text-primary-default"> Hello there, ali</span>
              Welcome web-app 👋
            </h1>
            <Button state={'primary'} size={'sm'} className="gap">
              <NwarrowIcon className="m-2 text-off-white " />
              button
              <BackwardArrowIcon className="m-2 text-white" />
            </Button>
            <div className="flex gap-20 w-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
