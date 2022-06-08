import { Meta, Story } from '@storybook/react/types-6-0';
import { ProfileComponent } from '.';
import { ProfileComponentProps } from '../../shared-types/shared-types';
import { Menu } from '../Menu';
import { ToggleTheme } from '../ToggleTheme';
import mock from './mock';

export default {
  title: 'ProfileComponent',
  component: ProfileComponent,
  args: mock.data.usersPermissionsUser.data.attributes,
} as Meta<ProfileComponentProps>;

export const Template: Story<ProfileComponentProps> = (args) => {
  return (
    <div>
      <Menu />
      <ToggleTheme />
      <ProfileComponent {...args} />
    </div>
  );
};
