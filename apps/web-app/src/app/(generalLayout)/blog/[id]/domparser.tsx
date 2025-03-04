'use client';
import { useState, useEffect } from 'react';
const DomParser = ({
  parseTag,
  className,
}: {
  parseTag: string | JSX.Element | JSX.Element[];
  className?: string;
}) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return <div className={className}>{isClient ? parseTag : ''}</div>;
};
export default DomParser;
