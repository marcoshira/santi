import { Meta, Story } from '@storybook/react/types-6-0';
import { HomePage } from '.';

export default {
  title: 'HomePage',
  component: HomePage,
  args: {
    title: 'title',
  },
} as Meta;

export const Template: Story = (args) => {
  return (
    <div>
      <HomePage {...args} />
    </div>
  );
};
