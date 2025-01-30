import type { FC } from 'react';
import { IconDisplayComponent } from '../display/icon-display.component';
import type { IconListProps } from './icon-list.type';

// Define the shape of the props for IconList, including an icons prop

export const IconList: FC<IconListProps> = ({ icons, ...props }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {Object.entries(icons).map(([iconName, IconComponent]) => (
        <IconDisplayComponent
          key={iconName}
          IconComponent={IconComponent}
          name={iconName}
          {...props}
        />
      ))}
    </div>
  );
};
