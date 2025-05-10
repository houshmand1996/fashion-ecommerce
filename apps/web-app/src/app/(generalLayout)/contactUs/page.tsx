import {
  AddMessageIcon,
  ChatMessageIcon,
  SeparatorIcon,
  TwitterIcon,
} from '@code-dudes/fashion-ecommerce/icon';
import { ContactCard } from '../../pages';
const page = () => {
  return (
    <div className="h-[974px]">
      <p className="title uppercase text-center mt-[33.75px]">Contact us</p>
      <SeparatorIcon className="w-[124.954px] h-[9.254px] text-label ml-[125.85px] " />
      <div className="ml-[14.41px] mt-[50.42px] mr-4 flex flex-col gap-4">
        <ContactCard Icon={ChatMessageIcon} buttonText="Chat witH us">
          Need an ASAP answer? Contact us via chat, 24/7! For existing furniture
          orders, please call us.
        </ContactCard>
        <ContactCard
          className="even-child:leading-[23px] mt-[59px]"
          Icon={AddMessageIcon}
          buttonText="Text us"
        >
          You can text us at 800-309-2622 – or click on the “text us” link below
          on your mobile device. Please allow the system to acknowledge a simple
          greeting (even “Hi” will do!) before providing your question/order
          details. Consent is not required for any purchase. Message and data
          rates may apply. Text messaging may not be available via all carriers.
        </ContactCard>
        <ContactCard
          className="mt-[60px] *:fill-none even-child:leading-[23px]"
          Icon={TwitterIcon}
        >
          To send us a private or direct message, like @Open Fashion on
          <span className="underline decoration-solid decoration-auto underline-offset-auto facebook mx-1">
            Facebook
          </span>
          or follow us on
          <span className="underline decoration-solid decoration-auto underline-offset-auto facebook mx-1">
            Twitter
          </span>
          . We’ll get back to you ASAP. Please include your name, order number,
          and email address for a faster response!
        </ContactCard>
        <div></div>
      </div>
    </div>
  );
};
export default page;
