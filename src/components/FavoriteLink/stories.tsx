import { Meta, Story } from '@storybook/react/types-6-0';
import { FavoriteLink } from '.';
import { FavoriteProps } from '../../shared-types/shared-types';
import mock from '../ProfileComponent/mock';

export default {
  title: 'FavoriteLink',
  component: FavoriteLink,
  args: mock.usersPermissionsUser.data.attributes.favorite,
} as Meta<FavoriteProps>;

export const Template: Story<FavoriteProps> = (args) => {
  return (
    <div>
      <FavoriteLink {...args} />
    </div>
  );
};
