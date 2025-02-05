import type { StoryFn, Meta, StoryObj } from '@storybook/react';
import { Button } from './index';
import { ComponentProps } from 'react';
type storyProps = ComponentProps<typeof Button>;
type story = StoryObj<storyProps>;
const meta: Meta<storyProps> = {
  title: 'UI Kit/Button',
  component: Button,
  argTypes: {
    disabled: { control: 'boolean', defaultValue: false },
  },
};
export default meta;
const Template: StoryFn = (args: any) => <Button {...args} />;
export const primary: story = {
  args: {
    variant: 'default',
    size: 'default',
  },
};
export const secondary: story = {
  args: {
    variant: 'secondary',
    size: 'icon',
  },
  render: (args) => {
    return <Button {...args}>test</Button>;
  },
};
export const Encounter = Template.bind({});
