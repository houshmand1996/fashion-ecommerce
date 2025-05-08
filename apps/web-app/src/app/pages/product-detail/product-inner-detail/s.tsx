'use client';
import React, { useEffect, useState } from 'react';
const DynamicSVG = ({ src, className }: { src: string; className: string }) => {
  const [svgContent, setSvgContent] = useState('');
  const fill = 'none';
  useEffect(() => {
    fetch(src)
      .then((res) => res.text())
      .then((data) => {
        // Replace default fill with desired fill
        const colored = data.replace(/fill=".*?"/g, `fill="currentColor"`);
        // const classname = data.(/class=".*?"/g, `class="${className}"`);
        const newClass = data
          .slice(0, data.indexOf('>'))
          .concat(`class=" ${className}"`)
          .concat(data.slice(data.indexOf('>') + 1));

        setSvgContent(newClass);
        setSvgContent(colored);
      });
  }, [src, fill]);

  return <div dangerouslySetInnerHTML={{ __html: svgContent }} />;
};

export default DynamicSVG;
