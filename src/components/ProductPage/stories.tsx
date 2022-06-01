import { Meta, Story } from '@storybook/react/types-6-0';
import { ProductPage } from '.';
import { ProductCardArrayProps } from '../../shared-types/shared-types';
import { HomePage } from '../../templates/HomePage';
import { NavBar } from '../NavBar';
import mock from '../ProductCard/mock';
import types from '../../api/typesMock';

export default {
  title: 'ProductPage',
  component: ProductPage,
  args: mock,
} as Meta<ProductCardArrayProps>;

export const Template: Story<ProductCardArrayProps> = (args) => {
  return (
    <div>
      <HomePage />
      <NavBar productTypes={types.data.productTypes} />
      <ProductPage {...args} />
    </div>
  );
};
