import type { StoryFn, Meta, StoryObj } from '@storybook/react';
import { DropdownMenu } from './index';
import React, { ComponentProps } from 'react';

type storyProps = ComponentProps<typeof DropdownMenu> & {
  DropdownMenuText: string;
};
type story = StoryObj<storyProps>;
const meta: Meta<storyProps> = {
  title: 'UI Kit/DropdownMenu',
  component: DropdownMenu,

  argTypes: {
    className: { control: 'text', defaultValue: '' },
  },
};
export default meta;
export const Encounter: story = {
  args: {
    DropdownMenuText: 'hello',
    className: '',
  },
  render: ({ DropdownMenuText, className, ...args }) => {
    return (
      <DropdownMenu {...args} className={className}>
        {DropdownMenuText}
      </DropdownMenu>
    );
  },
};
