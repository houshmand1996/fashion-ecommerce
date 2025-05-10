import { cn } from '@code-dudes/fashion-ecommerce/ui-kit ';
import { cva } from 'class-variance-authority';
import { ComponentPropsWithoutRef, forwardRef } from 'react';
const ItemVariant = cva(
  'flex flex-col  bg-white border-[#d4d4d4] w-[342px] h-[50px] gap-[5.6px] border-b-[1px]'
);
export const FormItemTitle = forwardRef<
  HTMLParagraphElement,
  ComponentPropsWithoutRef<'p'>
>(({ ...props }, ref) => {
  return (
    <p
      className={cn(
        'text-[#979797] text-[12px]/[14px] border-none capitalize',
        props.className
      )}
      ref={ref}
      {...props}
    >
      {props.children}
    </p>
  );
});
export const FormItemInput = forwardRef<
  HTMLInputElement,
  ComponentPropsWithoutRef<'input'>
>(({ className, ...props }, ref) => {
  return (
    <input
      className={cn(
        'placeholder-[#979797] placeholder:text-[15px] text-[16px] text-body outline-none capitalize',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
export const FormItemDescription = forwardRef<
  HTMLParagraphElement,
  ComponentPropsWithoutRef<'p'>
>(({ ...props }, ref) => {
  return (
    <p
      className={cn('text-[#aaa] text-[12px]/[20px]', props.className)}
      ref={ref}
      {...props}
    >
      {props.children}
    </p>
  );
});
export const FormItem = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<'div'>
>(({ className, ...props }, ref) => {
  return (
    <div className={cn('outline-none ml-4', className)} ref={ref} {...props}>
      {props.children}
    </div>
  );
});
export const FormItemInner = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<'div'>
>(({ className, ...props }, ref) => {
  return (
    <div
      className={cn(
        'flex flex-col  bg-white border-[#d4d4d4] w-[342px] h-[50px] gap-[5.6px] border-b-[1px]',
        className
      )}
      {...props}
      ref={ref}
    >
      {props.children}
    </div>
  );
});
