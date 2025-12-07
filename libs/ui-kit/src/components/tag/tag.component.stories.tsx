<<<<<<< HEAD
import type { StoryFn, Meta, StoryObj } from '@storybook/react';
=======
import type { StoryFn, Meta, StoryObj } from '@storybook/react-vite';
>>>>>>> develop
import { Tag } from './index';
import React, { ComponentProps } from 'react';

type storyProps = ComponentProps<typeof Tag> & {
  tagText: string;
};
type story = StoryObj<storyProps>;
const meta: Meta<storyProps> = {
  title: 'UI Kit/Tag',
  component: Tag,

  argTypes: {
    styles: {
      control: { type: 'select' },
      options: ['border', 'fill'],
    },
  },
};
export default meta;
export const Encounter: story = {
  args: {
    tagText: 'hello',
    styles: 'border',
  },
  render: ({ tagText, ...args }) => {
    return <Tag {...args}>{tagText}</Tag>;
  },
};
