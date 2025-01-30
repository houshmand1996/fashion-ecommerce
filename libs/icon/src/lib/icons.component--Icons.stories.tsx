import type { Meta, StoryFn } from '@storybook/react';

import type { IconsProps } from './icons.component';
import { IconsComponent } from './icons.component';

export default {
  title: 'Icons',
  component: IconsComponent,
  argTypes: {
    fontSize: {
      control: 'number',
    },
    color: {
      control: { type: 'color' },
    },
    className: {
      control: { type: 'text' },
    },
  },
} as Meta<IconsProps>;

const Template: StoryFn<IconsProps> = (args) => <IconsComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
  color: '',
  fontSize: '',
  className: '',
};
