'use client';
import {
  ForwardIcon,
  PlusIcon,
  SeparatorIcon,
  ShoppingBagIcon,
} from '@code-dudes/fashion-ecommerce/icon';
import { Button, cn } from '@code-dudes/fashion-ecommerce/ui-kit';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export const Checkout = ({
  shipping,
}: {
  shipping: modules.shippingMethod[] | null;
}) => {
  const [shipment, setShipment] = useState({
    shippingMethod: '',
    shippingPrice: 0,
  });
  const [openPopover, setOpenPopover] = useState(false);
  useEffect(() => {
    setOpenPopover(!openPopover);
  }, [shipment.shippingMethod]);
  return (
    <div
      className="flex-1 w-full h-full flex flex-col justify-between"
      id="firstElement"
    >
      <div className="  select-none">
        <div className="w-page  ">
          <p className="title w-[225.508px] h-[32.576px] text-black uppercase mt-[33.75px] ml-[75.58px] text-center">
            Checkout
          </p>
          <SeparatorIcon className="w-[124.959px] h-[9.254px] text-label ml-[125.85px] " />
        </div>
        <div className="mt-[16.59px] mx-4">
          <p className="text-[14px]/[16px] tracking-[1px] uppercase text-placeholder">
            Shipping address
          </p>
          <Link
            href={'/addaddress'}
            className="bg-[#f9f9f9] mt-3 rounded-[44px] px-5   flex-wrap justify-between  items-center  py-[13px] border-2 flex  "
          >
            <p className="w-[16px]/[22px] text-label font-TenorSans">
              Add shipping address
            </p>
            <PlusIcon className="w-5 h-5" />
          </Link>
        </div>
        <div className="mt-9 mx-4 flex flex-col gap-3">
          <p
            className={cn(
              'text-[14px]/[16px] tracking-[1px] uppercase text-placeholder'
            )}
          >
            Shipping Method
          </p>
          {/* <div */}
          {/*   popover="" */}
          {/*   id="popover" */}
          {/*   className="w-full  bg-[#f9f9f9] [&:popover-open]:flex  flex-col" */}
          {/* > */}

          {/* </div> */}
          <button
            onClick={() => setOpenPopover((c) => !c)}
            className={cn(
              'bg-[#f9f9f9] rounded-[44px] px-5 justify-between items-center  py-[13px] border-2 flex  ',
              openPopover ? 'hidden' : ''
            )}
          >
            <p className="w-[16px]/[22px] text-label">
              {shipment.shippingMethod
                ? shipment.shippingMethod
                : shipping
                ? shipping[0].shippingName
                : ''}
            </p>
            <div className="flex gap-[5.32px] items-center">
              <p>
                {shipment.shippingMethod
                  ? shipment.shippingPrice
                  : shipping
                  ? shipping[0].cost
                  : ''}{' '}
                $
              </p>
              <ForwardIcon
                className={cn(
                  'w-5 h-5 fill-none rotate-90',
                  openPopover ? '-rotate-90' : ''
                )}
              />
            </div>
          </button>
          <div
            className={cn(
              'flex-col bg-[#f9f9f9] rounded-[34px] justify-start items-start px-5 py-[13px] border-2    ',

              openPopover ? 'flex' : 'hidden'
            )}
          >
            <button
              onClick={() => setOpenPopover((c) => !c)}
              className={cn(' justify-between items-center mb-2  flex w-full ')}
            >
              <p className="w-[16px]/[22px] text-label">
                {shipment.shippingMethod
                  ? shipment.shippingMethod
                  : shipping
                  ? shipping[0].shippingName
                  : ''}
              </p>
              <div className="flex gap-[5.32px] items-center">
                <p>
                  {shipment.shippingMethod
                    ? shipment.shippingPrice
                    : shipping
                    ? shipping[0].cost
                    : ''}{' '}
                  $
                </p>
                <ForwardIcon
                  className={cn(
                    'w-5 h-5 fill-none rotate-90',
                    openPopover ? '-rotate-90' : ''
                  )}
                />
              </div>
            </button>
            {shipping &&
              shipping.map((ar, i) => (
                <button
                  className="border-t-2 mt-2 mb-1 w-full"
                  key={i}
                  onClick={() => {
                    setShipment({
                      shippingMethod: ar.shippingName,
                      shippingPrice: Number(ar.cost),
                    });
                  }}
                >
                  {ar.shippingName}
                </button>
              ))}
          </div>
        </div>
        <div className="px-4 mt-9">
          <p className="text-[14px]/[16px] tracking-[1px] uppercase text-placeholder">
            Payment method
          </p>
          <Link
            href={'/addcard'}
            className="bg-[#f9f9f9] mt-3 rounded-[44px] px-5   flex-wrap justify-between  items-center  py-[13px] border-2 flex  "
          >
            <p className="w-[16px]/[22px] text-label font-TenorSans">
              select payment method
            </p>
            <ForwardIcon className="w-5 h-5 fill-none rotate-90" />
          </Link>
        </div>
      </div>
      <Button
        size={'lg'}
        state={'primary'}
        className="absolute bottom-0 left-0 w-full"
      >
        <ShoppingBagIcon className="w-5 h-5 fill-none" />
        place order
      </Button>
    </div>
  );
};
