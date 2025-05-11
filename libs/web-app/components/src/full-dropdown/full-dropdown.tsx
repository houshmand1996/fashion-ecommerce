'use client';

import { CloseIcon } from '@code-dudes/fashion-ecommerce/icon';
import {
  cn,
  Dialog,
  DialogClose,
  DialogContent,
  DialogProps,
  DialogTrigger,
} from '@code-dudes/fashion-ecommerce/ui-kit';
import React, { ReactNode, useEffect, useState } from 'react';
type Dropdown = {
  children?: ReactNode;
  triggerChildren?: ReactNode;
  className?: string;
  dialogClassName?: string;
};
export const Dropdown: React.FC<Dropdown> = ({
  children,
  triggerChildren,
  className,
  dialogClassName,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      // document.body.classList.remove('min-h-svh');
      document.body.classList.replace('overflow-x-clip', 'overflow-hidden');
    } else {
      // document.body.classList.add('min-h-svh');
      document.body.classList.replace('overflow-hidden', 'overflow-x-clip');
    }
  }, [isMenuOpen]);

  return (
    <Dialog id="dialog">
      <DialogTrigger
        state={'default'}
        size={'default'}
        onClick={() => setIsMenuOpen(true)}
        className=" outline-none "
      >
        {triggerChildren}
      </DialogTrigger>
      <DialogContent
        id="dialogContent"
        className={cn(
          ' bg-white  min-w-full min-h-full   overflow-x-hidden   menu',
          dialogClassName
        )}
      >
        <DialogClose
          className="mt-[10px] ml-4"
          onClick={() => setIsMenuOpen(false)}
        >
          <CloseIcon className="w-6 h-6 text-[#333333]" />
        </DialogClose>
        <div className={className}>{children}</div>
      </DialogContent>
    </Dialog>
  );
};
