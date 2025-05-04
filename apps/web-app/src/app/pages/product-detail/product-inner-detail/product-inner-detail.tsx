import {
  RefreshIcon,
  ShippingIcon,
  TagIcon,
  UpIcon,
} from '@code-dudes/fashion-ecommerce/icon';
import DynamicSVG from './s';
import {
  Accordion,
  AccordionContext,
  AccordionHeader,
  AccordionTrigger,
} from '@code-dudes/fashion-ecommerce/web-app/components';

export const ProductInnerDetail = ({
  care,
  product,
}: {
  product: modules.BProduct[];
  care: { description: string; icon: string }[];
}) => {
  const shipmentMethod = 'Free Flat Rate Shipping';
  const date = new Date();
  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth();
  const currentDay = date.getDay();
  return (
    <div
      id="productDetail"
      className="pt-[16.48px] pl-[20.42px] pr-4 h-[740px]"
    >
      {product[0].product_materials && (
        <div id="martial" className="flex flex-col gap-[6.42px]">
          <p className="uppercase subtitle-medium">MATERIALS</p>
          <p className="text-label body-medium">
            {product[0].product_materials}
          </p>
        </div>
      )}

      {product[0].care_instruction && (
        <div
          id="care_instruction"
          className="pt-[27.82px] flex flex-col gap-[6.42px]"
        >
          <p className="uppercase subtitle-medium">care</p>
          <p className="text-label body-medium">
            {product[0].care_instruction}
          </p>
        </div>
      )}
      <div className="pt-[13.77px] flex flex-col gap-4">
        {care.length > 0 &&
          care.map((ar, i) => (
            <div className="flex gap-[12.53px]" key={i}>
              <DynamicSVG
                className="w-6 h-6 opacity-50 fill-none"
                src={process.env.NEXT_PUBLIC_SERVER + ar.icon}
              />

              <p className="text-label body-medium">{ar.description}</p>
            </div>
          ))}
      </div>
      <div id="shippingAndReturn">
        <p className="subtitle-medium uppercase pt-[42px] ">
          shipping And Return
        </p>

        <Accordion>
          <div className=" flex justify-between">
            <AccordionHeader>
              <ShippingIcon className="h-6 w-6 fill-none" />
              <p className="body-medium">{shipmentMethod}</p>
            </AccordionHeader>
            <AccordionTrigger />
          </div>
          <AccordionContext>
            Estimated to be delivered on
            <p>{`${currentYear}/${currentMonth + 1}/${currentDay}`}</p>
          </AccordionContext>
        </Accordion>
        <Accordion>
          <div className=" flex justify-between">
            <AccordionHeader>
              <TagIcon className="h-6 w-6 fill-none" />
              <p className="body-medium">COD Policy</p>
            </AccordionHeader>
            <AccordionTrigger />
          </div>
          <AccordionContext>code</AccordionContext>
        </Accordion>
        <Accordion>
          <div className=" flex justify-between">
            <AccordionHeader>
              <RefreshIcon className="h-6 w-6 fill-none" />
              <p className="body-medium">Return Policy</p>
            </AccordionHeader>
            <AccordionTrigger />
          </div>
          <AccordionContext>
            This item is eligible for FREE returns. You have 7 days from
            delivery to mail out the return.
          </AccordionContext>
        </Accordion>
      </div>
    </div>
  );
};
