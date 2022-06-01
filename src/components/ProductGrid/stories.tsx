import { Meta, Story } from '@storybook/react/types-6-0';
import { ProductGrid } from '.';
import { ProductGridProps } from '../../shared-types/shared-types';
import mock from './mock';

export default {
  title: 'ProductGrid',
  component: ProductGrid,
  args: mock,
} as Meta<ProductGridProps>;

export const Template: Story<ProductGridProps> = (args) => {
  return (
    <div>
      <ProductGrid {...args} />
    </div>
  );
};
