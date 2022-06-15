import { Meta, Story } from '@storybook/react/types-6-0';
import { CartCard } from '.';
import { CartQuantityAttributesProps } from '../../shared-types/shared-types';
import mock from '../ProfileComponent/mock';

export default {
  title: 'CartCard',
  component: CartCard,
  args: mock.usersPermissionsUser.data.attributes.cart_quantity.data.attributes
    .cartQuantity[0],
} as Meta<CartQuantityAttributesProps>;

export const Template: Story<CartQuantityAttributesProps> = (args) => {
  return (
    <div>
      <CartCard {...args} />
    </div>
  );
};
