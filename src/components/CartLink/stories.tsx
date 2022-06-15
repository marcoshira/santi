import { Meta, Story } from '@storybook/react/types-6-0';
import { CartLink } from '.';
import { CartQuantityProps } from '../../shared-types/shared-types';
import mock from '../ProfileComponent/mock';

export default {
  title: 'CartLink',
  component: CartLink,
  args: mock.usersPermissionsUser.data.attributes.cart_quantity,
} as Meta<CartQuantityProps>;

export const Template: Story<CartQuantityProps> = (args) => {
  return (
    <div>
      <CartLink {...args} />
    </div>
  );
};
