import type { StoryFn, Meta, StoryObj } from '@storybook/react';
import { Dialog, DialogClose, DialogContent, DialogTrigger } from './index';
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
    return (
      <Dialog {...args} className={className}>
        <DialogTrigger className="">open Dialog</DialogTrigger>
        <DialogContent className="w-52 h-52 ">
          <DialogClose>close dialog</DialogClose>
          it in dialog
        </DialogContent>
      </Dialog>
    );
  },
};
