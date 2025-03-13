import type { StoryFn, Meta, StoryObj } from '@storybook/react';
import { Dialog } from './index';
import React, { ComponentProps } from 'react';

type storyProps = ComponentProps<typeof Dialog>;
type story = StoryObj<storyProps>;
const meta: Meta<storyProps> = {
  title: 'UI Kit/Dialog',
  component: Dialog,

  argTypes: {
    className: { control: 'text', defaultValue: '' },
  },
};
export default meta;
export const Encounter: story = {
  args: {
    className: '',
  },
  render: ({ className, ...args }) => {
    return <Dialog {...args} className={className} />;
  },
};
