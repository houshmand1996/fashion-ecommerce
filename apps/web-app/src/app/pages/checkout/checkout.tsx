'use client';
import {
  ForwardIcon,
  PlusIcon,
  SeparatorIcon,
} from '@code-dudes/fashion-ecommerce/icon';
import { cn } from '@code-dudes/fashion-ecommerce/ui-kit';
import { ShippingType } from 'apps/web-app/src/app/(generalLayout)/checkout/page';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export const Checkout = ({ shipping }: { shipping: ShippingType }) => {
  const [shippingMethod, setShippingMethod] = useState('');
  const [check, setCheck] = useState(false);
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  return (
    <div className="select-none">
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
        <p className="text-[14px]/[16px] tracking-[1px] uppercase text-placeholder">
          Shipping Method
        </p>
        <dialog ref={dialogRef} className="shadow-sm">
          <button onClick={() => dialogRef.current?.close()}>here</button>
        </dialog>
        <button onClick={() => dialogRef.current?.showModal()}>
          open dialog
        </button>
        {/* <div className="relative"> */}
        {/*   <input */}
        {/*     type="checkbox" */}
        {/*     checked={check} */}
        {/*     className="peer hidden" */}
        {/*     readOnly={true} */}
        {/*     id="peer" */}
        {/*   /> */}
        {/*   <label */}
        {/*     onClick={() => setCheck(true)} */}
        {/*     htmlFor="peer" */}
        {/*     className="w-full  h-fit top-0 left-0" */}
        {/*   > */}
        {/*     <div className="bg-[#f9f9f9] rounded-[44px] px-5 justify-between items-center  py-[13px] border-2 flex  "> */}
        {/*       <p className="w-[16px]/[22px] text-label"> */}
        {/*         {shipping ? shipping[0].shippingName : ''} */}
        {/*       </p> */}
        {/*       <div className="flex gap-[5.32px] items-center"> */}
        {/*         <p>{shipping ? shipping[0].cost : ''}</p> */}
        {/*         <ForwardIcon className={cn('w-5 h-5 fill-none rotate-90')} /> */}
        {/*       </div> */}
        {/*     </div> */}
        {/*   </label> */}
        {/*   <div className="z-50 absolute left-0 top-0 w-full  hidden peer-checked:flex flex-col bg-[#f9f9f9]"> */}
        {/*     {shipping && */}
        {/*       shipping.map((ar) => ( */}
        {/*         <button */}
        {/*           key={ar.shippingName} */}
        {/*           onClick={() => { */}
        {/*             setShippingMethod(ar.shippingName); */}
        {/*             setCheck(false); */}
        {/*           }} */}
        {/*         > */}
        {/*           {ar.shippingName} */}
        {/*         </button> */}
        {/*       ))} */}
        {/*   </div> */}
        {/* </div> */}
      </div>
    </div>
  );
};
