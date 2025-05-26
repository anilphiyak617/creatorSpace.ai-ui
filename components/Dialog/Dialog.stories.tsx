import React from 'react';
import { Story, Meta } from '@storybook/react';
import Dialog from './Dialog';

export default {
  title: 'Components/Dialog',
  component: Dialog,
  argTypes: {
    isOpen: { control: 'boolean' },
    onClose: { action: 'closed' },
  },
} as Meta;

const Template: Story<React.ComponentProps<typeof Dialog>> = (args) => <Dialog {...args} />;

export const Default = Template.bind({});
Default.args = {
  isOpen: true,
  onClose: () => {},
  title: 'Default Dialog Title',
  children: <p>This is the content of the dialog.</p>,
};

export const CustomTitle = Template.bind({});
CustomTitle.args = {
  ...Default.args,
  title: 'Custom Dialog Title',
};

export const NoTitle = Template.bind({});
NoTitle.args = {
  ...Default.args,
  title: undefined,
};

export const LongContent = Template.bind({});
LongContent.args = {
  ...Default.args,
  children: (
    <>
      <p>This is a dialog with long content to demonstrate scrolling behavior.</p>
      {Array.from({ length: 10 }, (_, i) => (
        <p key={i}>Additional content line {i + 1}</p>
      ))}
    </>
  ),
};