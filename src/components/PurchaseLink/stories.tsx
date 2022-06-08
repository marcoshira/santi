import { Meta, Story } from '@storybook/react/types-6-0';
import { PurchaseLink } from '.';
import { PurchaseAttributesProps } from '../../shared-types/shared-types';
import mock from '../ProfileComponent/mock';

export default {
  title: 'PurchaseLink',
  component: PurchaseLink,
  args: mock.data.usersPermissionsUser.data.attributes.puchase.data.attributes,
} as Meta<PurchaseAttributesProps>;

export const Template: Story<PurchaseAttributesProps> = (args) => {
  return (
    <div>
      <PurchaseLink {...args} />
    </div>
  );
};
