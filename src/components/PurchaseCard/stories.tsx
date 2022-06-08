import { Meta, Story } from '@storybook/react/types-6-0';
import { PurchaseCard } from '.';
import { ItemProps } from '../../shared-types/shared-types';
import mock from '../ProfileComponent/mock';

export default {
  title: 'PurchaseCard',
  component: PurchaseCard,
  args: mock.data.usersPermissionsUser.data.attributes.puchase.data.attributes
    .Item[0],
} as Meta<ItemProps>;

export const Template: Story<ItemProps> = (args) => {
  return (
    <div>
      <PurchaseCard {...args} />
    </div>
  );
};
