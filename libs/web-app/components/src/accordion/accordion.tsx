'use client';
import { DownIcon, TagIcon, UpIcon } from '@code-dudes/fashion-ecommerce/icon';
import {
  AccordionProvider,
  cn,
  RefProvider,
} from '@code-dudes/fashion-ecommerce/ui-kit';
import React, { ReactNode, forwardRef, useState } from 'react';

type AccordionHeaderProps = { className?: string; children?: ReactNode };

export const AccordionHeader = forwardRef<HTMLDivElement, AccordionHeaderProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'flex gap-[10.53px] items-center cursor-pointer',
          className
        )}
        {...props}
      />
    );
  }
);

export const AccordionTrigger = forwardRef<
  HTMLLabelElement,
  AccordionHeaderProps
>(({ className, children, ...props }, ref) => {
  const isOpen = React.useContext(AccordionProvider);
  return (
    <label ref={ref} className={className} {...props}>
      {children || (
        <DownIcon
          className={cn(
            'w-6 h-6 opacity-50 fill-none cursor-pointer',
            isOpen && 'rotate-180'
          )}
        />
      )}
    </label>
  );
});

export const AccordionContext = forwardRef<
  HTMLDivElement,
  AccordionHeaderProps
>(({ ...props }, ref) => {
  const isOpen = React.useContext(AccordionProvider);
  return (
    <div
      ref={ref}
      className={cn(
        ' text-label body-medium pl-[34.53px]',
        isOpen ? 'inline-block' : 'hidden'
      )}
      {...props}
    />
  );
});

export const Accordion: React.FC<React.HTMLAttributes<HTMLDivElement>> = (
  props
) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen((prev) => !prev);

  return (
    <AccordionProvider.Provider value={isOpen}>
      <div
        className="pt-[21.35px] cursor-pointer"
        {...props}
        onClick={() => toggleOpen()}
      >
        {props.children}
      </div>
    </AccordionProvider.Provider>
  );
};
