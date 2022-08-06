import { Story, Meta } from '@storybook/react';

import { Button, ButtonProps } from '.';

export default {
  title: 'Elements/Buttons',
  component: Button,
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<ButtonProps> = (args) => <Button {...args} />;

//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = { children: 'Primary', type: 'primary' };

export const Secondary = Template.bind({});
Secondary.args = { children: 'Secondary', type: 'secondary' };
