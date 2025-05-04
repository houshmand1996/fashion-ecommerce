'use client';
import React from 'react';

export const RefProvider =
  React.createContext<React.RefObject<HTMLDialogElement> | null>(null);
export const useStableDialogRef = () => {
  const ref = React.useContext(RefProvider);
  if (!ref) throw Error('wtf');
  else return ref;
};
export const AccordionProvider = React.createContext(false);
