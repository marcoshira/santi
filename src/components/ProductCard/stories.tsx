import { Meta, Story } from '@storybook/react/types-6-0';
import { ProductCard } from '.';
import { ProductCardProps } from '../../shared-types/shared-types';
import mock from './mock';

export default {
  title: 'ProductCard',
  component: ProductCard,
  args: mock,
} as Meta<ProductCardProps>;

export const Template: Story<ProductCardProps> = (args) => {
  return (
    <div>
      <ProductCard {...args} />
    </div>
  );
};
