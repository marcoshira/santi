import { Meta, Story } from '@storybook/react/types-6-0';
import { FavoriteCard } from '.';
import { ProductCardArrayProps } from '../../shared-types/shared-types';
import mock from '../ProfileComponent/mock';

export default {
  title: 'FavoriteCard',
  component: FavoriteCard,
  args: mock.usersPermissionsUser.data.attributes.favorite.data.attributes
    .products.data[0],
} as Meta<ProductCardArrayProps>;

export const Template: Story<ProductCardArrayProps> = (args) => {
  return (
    <div>
      <FavoriteCard {...args} />
    </div>
  );
};
