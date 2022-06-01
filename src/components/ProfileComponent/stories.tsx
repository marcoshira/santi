import { Meta, Story } from '@storybook/react/types-6-0';
import { ProfileComponent } from '.';
import { ProfileComponentProps } from '../../shared-types/shared-types';
import mock from './mock';

export default {
  title: 'ProfileComponent',
  component: ProfileComponent,
  args: mock.data.usersPermissionsUser.data,
} as Meta<ProfileComponentProps>;

export const Template: Story<ProfileComponentProps> = (args) => {
  return (
    <div>
      <ProfileComponent {...args} />
    </div>
  );
};
