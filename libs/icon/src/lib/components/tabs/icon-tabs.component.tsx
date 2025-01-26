/* eslint-disable import/no-unresolved */
import * as Tabs from '@radix-ui/react-tabs';
import type { FC } from 'react';
import { useState } from 'react';
import type { IconTabsPropType, IconType } from './icon-tabs.type';
import { IconList } from '../list/icon-list.component';

import * as taliIcons from '@tali/icon';

const monochromeIcons = Object.fromEntries(
  Object.entries(taliIcons).filter(([key]) => key.endsWith('Icon')),
);
const graphicIcons = Object.fromEntries(
  Object.entries(taliIcons).filter(([key]) => key.endsWith('Graphic')),
);

export const IconTabsComponent: FC<IconTabsPropType> = ({
  fontSize,
  color,
  className,
}) => {
  const [currentTab, setCurrentTab] = useState<IconType>('monochrome');

  return (
    <Tabs.Root defaultValue="monochrome" className="max-w-7xl mx-auto">
      <Tabs.List className="flex justify-center border-b-2 max-h-screen overflow-auto">
        <Tabs.Trigger
          onClick={() => setCurrentTab('monochrome')}
          value="monochrome"
          className={`text-sm font-medium text-center uppercase tracking-wider px-8 py-2 focus:outline-none transition-colors duration-300 ${
            currentTab === 'monochrome'
              ? 'border-b-2 border-current text-black'
              : 'text-gray-500'
          }`}
        >
          Monochrome Icons
        </Tabs.Trigger>

        <Tabs.Trigger
          value="graphic"
          onClick={() => setCurrentTab('graphic')}
          className={`text-sm font-medium text-center uppercase tracking-wider px-8 py-2 focus:outline-none transition-colors duration-300 ${
            currentTab === 'graphic'
              ? 'border-b-2 border-current text-black'
              : 'text-gray-500'
          }`}
        >
          Graphic Icons
        </Tabs.Trigger>
      </Tabs.List>

      <Tabs.Content value="monochrome" className="p-4 max-h-[400px]">
        <IconList
          fontSize={fontSize}
          color={color}
          className={className}
          icons={monochromeIcons}
        />
      </Tabs.Content>

      <Tabs.Content value="graphic" className="p-4">
        <IconList
          fontSize={fontSize}
          color={color}
          className={className}
          icons={graphicIcons}
        />
      </Tabs.Content>
    </Tabs.Root>
  );
};
