import { Banner, NewArrival } from './pages/first-page';
import { Brand } from './pages/first-page/brand';

export default function Index() {
  return (
    <div id="homePage" className=" w-page h-[4600px] bg-off-white ">
      <Banner />
      <NewArrival />
      <Brand />
    </div>
  );
}
