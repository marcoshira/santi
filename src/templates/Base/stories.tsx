import { Meta, Story } from '@storybook/react/types-6-0';
import { Base } from '.';
// import { BaseProps } from '../../shared-types/shared-types';
import mock from '../../components/ProductGrid/mock';

export default {
  title: 'Base',
  component: Base,
  args: {
    data: mock.data,
  },
} as Meta;

export const Template: Story = (args) => {
  return (
    <div>
      <Base {...args} />
    </div>
  );
};
