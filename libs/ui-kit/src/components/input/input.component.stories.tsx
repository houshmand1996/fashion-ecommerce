import type { StoryFn, Meta } from '@storybook/react-vite';
import { Input } from './input.component';

export default {
  title: 'UI Kit/Input',
  component: Input,
  argTypes: {
    disabled: { control: 'boolean', defaultValue: false },
  },
} as Meta;

const Template: StoryFn = (args: any) => <Input {...args} />;

export const Encounter = Template.bind({});
