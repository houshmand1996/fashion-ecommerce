import { Button } from '@code-dudes/fashion-ecommerce/ui-kit ';
import {
  BackIcon,
  NwarrowIcon,
  BackwardArrowIcon,
} from '@code-dudes/fashion-ecommerce/icon';
const b = BackIcon;
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
          <div id="welcome">
            <h1>
              <span className="text-primary-default"> Hello there, ali</span>
              Welcome web-app 👋
            </h1>
            <Button state={'secondary'} size={'sm'} className="gap">
              <NwarrowIcon className="m-2 text-offWhite " />
              button
              <BackwardArrowIcon className="m-2 text-white" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
