'use client';
import * as React from 'react';
import { cn, stableDialogRef, RefProvider } from '../../lib';
import type { DialogProps } from './dialog.type';
import { dialogVariants } from './dialog-menu.variant';
import { Button, ButtonProps } from '../button';

export const DialogClose: React.FC<ButtonProps> = (props) => {
  const dialogRef = stableDialogRef();

  return (
    <Button
      onClickCapture={() => {
        dialogRef.current?.close();
      }}
      {...props}
      state={'default'}
      size={'default'}
    >
      {props.children}
    </Button>
  );
};
export const DialogTrigger: React.FC<ButtonProps> = (props) => {
  const dialogRef = stableDialogRef();
  return (
    <Button
      onClickCapture={() => {
        dialogRef.current?.showModal();
      }}
      {...props}
    >
      {props.children}
    </Button>
  );
};
export const DialogContent = React.forwardRef<HTMLDialogElement, DialogProps>(
  ({ className, ...props }, ref) => {
    const dialogRef = stableDialogRef();
    return (
      <dialog
        className={cn(dialogVariants({ className }))}
        ref={dialogRef}
        {...props}
      />
    );
  }
);

export const Dialog: React.FC<React.HTMLAttributes<HTMLDivElement>> = (
  props
) => {
  const dialogRef = React.useRef<HTMLDialogElement>(null);

  return (
    <RefProvider.Provider value={dialogRef}>
      <div id="dialog" {...props}>
        {props.children}
      </div>
    </RefProvider.Provider>
  );
};
