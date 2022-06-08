import { Meta, Story } from '@storybook/react/types-6-0';
import { ProfileLink } from '.';
import { ProfileComponentProps } from '../../shared-types/shared-types';
import mock from '../ProfileComponent/mock';

export default {
  title: 'ProfileLink',
  component: ProfileLink,
  args: mock.data.usersPermissionsUser.data.attributes,
} as Meta<ProfileComponentProps>;

export const Template: Story<ProfileComponentProps> = (args) => {
  return (
    <div>
      <ProfileLink {...args} />
    </div>
  );
};
