<<<<<<< HEAD
import type { StoryFn, Meta, StoryObj } from '@storybook/react';
=======
import type { StoryFn, Meta, StoryObj } from '@storybook/react-vite';
>>>>>>> develop
import { Button } from './index';
import React, { ComponentProps } from 'react';

type storyProps = ComponentProps<typeof Button> & {
  buttonText: string;
  leftIcon: React.FC<React.SVGProps<SVGSVGElement>>;
  rightIcon: React.FC<React.SVGProps<SVGSVGElement>>;
};
type story = StoryObj<storyProps>;
const meta: Meta<storyProps> = {
  title: 'UI Kit/Button',
  component: Button,

  argTypes: {
    disabled: { control: 'boolean', defaultValue: false },
    state: { control: { type: 'select' }, options: ['primary', 'secondary'] },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    // leftIcon: {
    //   control: { type: 'select' },
    //   options: [String(icon.Arrow1Icon)],
    // },
  },
};
export default meta;
export const Encounter: story = {
  args: {
    buttonText: 'hello',
    state: 'secondary',
    size: 'sm',
  },
  render: ({ buttonText, leftIcon, rightIcon, ...args }) => {
    return <Button {...args}>{buttonText}</Button>;
  },
};
