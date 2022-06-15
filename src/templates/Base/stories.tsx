import { Meta, Story } from '@storybook/react/types-6-0';
import { Base } from '.';
// import { BaseProps } from '../../shared-types/shared-types';
import mock from '../../components/ProductGrid/mock';
import typesMock from '../../api/typesMock';

export default {
  title: 'Base',
  component: Base,
  args: {
    data: mock.products,
    types: typesMock.data.productTypes,
  },
} as Meta;

export const Template: Story = (args) => {
  return (
    <div>
      <Base {...args} />
    </div>
  );
};
