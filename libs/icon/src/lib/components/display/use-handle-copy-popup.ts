/* eslint-disable import/no-unresolved */
import { useCopyToClipboard } from './useCopyToClipboard';
import { useState } from 'react';

export const useHandleCopyPopup = () => {
  const { copyToClipboard } = useCopyToClipboard();
  const [copied, setCopied] = useState(false);

  const handleCopyClick = (text: string) => {
    copyToClipboard(text);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return {
    handleCopyClick,
    copied,
  };
};
