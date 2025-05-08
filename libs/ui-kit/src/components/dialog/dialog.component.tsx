'use client';
import * as React from 'react';
import { cn, useStableDialogRef, RefProvider } from '../../lib';
import type { DialogProps } from './dialog.type';
import { dialogVariants } from './dialog-menu.variant';
import { Button, ButtonProps } from '../button';
import { useComposedRefs } from '@radix-ui/react-compose-refs';
export const DialogClose: React.FC<ButtonProps> = (props) => {
  const dialogRef = useStableDialogRef();

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
  const dialogRef = useStableDialogRef();
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
    const dialogRef = useStableDialogRef();
    const newRef = useComposedRefs(ref, dialogRef);
    return (
      <dialog
        className={cn(dialogVariants({ className }))}
        ref={newRef}
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
