/* eslint-disable jsx-a11y/click-events-have-key-events */
import type { FC } from 'react';
import type { IconDisplayPropsType } from './icon-display.type';
import { useHandleCopyPopup } from './use-handle-copy-popup';

export const IconDisplayComponent: FC<IconDisplayPropsType> = ({
  IconComponent,
  name,
  ...svgProps
}) => {
  const { copied, handleCopyClick } = useHandleCopyPopup();
  const styles = {
    fontSize: `${svgProps.fontSize}px`,
    color: svgProps.color,
  };
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      onClick={() => handleCopyClick(name)}
      className={`flex flex-col items-center p-4 border border-gray-200 m-2 rounded-lg hover:bg-gray-500 transition-colors cursor-pointer bg-slate-900 box-content relative ${
        copied && 'bg-black-500'
      }`}
    >
      <div className="text-gray-800 text-lg mb-2 ">
        <IconComponent
          aria-label={name}
          style={styles}
          className={svgProps.className}
        />
      </div>
      <div className="text-sm font-medium text-white">{name}</div>
      <div
        className="text-xs text-white bg-blue-600 rounded-xm p-1 transition-opacity"
        style={{
          visibility: copied ? 'visible' : 'hidden',
          opacity: copied ? 1 : 0,
          position: 'absolute',
          bottom: '45%',
        }}
      >
        Copied!
      </div>
    </div>
  );
};
