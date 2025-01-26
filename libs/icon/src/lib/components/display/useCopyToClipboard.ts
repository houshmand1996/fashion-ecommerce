import { useEffect, useState } from 'react';

export const useCopyToClipboard = () => {
  const [isCopySupported, setIsCopySupported] = useState(false);

  useEffect(() => {
    setIsCopySupported(!!navigator.clipboard);
  }, []);

  const copyToClipboard = (text: string) => {
    if (!navigator.clipboard) {
      console.error('Copy to clipboard is not supported in this browser.');
      return;
    }

    navigator.clipboard.writeText(text).catch((error) => {
      console.error('Failed to copy text to clipboard:', error);
    });
  };

  return { isCopySupported, copyToClipboard };
};
