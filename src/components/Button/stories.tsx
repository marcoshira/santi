import { Meta, Story } from '@storybook/react/types-6-0';
import { Button } from '.';
import { ButtonProps } from '../../shared-types/shared-types';

export default {
  title: 'Button',
  component: Button,
  args: {
    disabled: false,
    children: 'Button',
  },
} as Meta<ButtonProps>;

export const Template: Story<ButtonProps> = (args) => {
  return (
    <div>
      <Button {...args} />
    </div>
  );
};
