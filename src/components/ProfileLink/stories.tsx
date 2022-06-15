import { Meta, Story } from '@storybook/react/types-6-0';
import { ProfileLink } from '.';
import { ProfileComponentProps } from '../../shared-types/shared-types';
import mock from '../ProfileComponent/mock';

export default {
  title: 'ProfileLink',
  component: ProfileLink,
  parameters: {
    layout: 'fullscreen',
  },
  args: mock.usersPermissionsUser.data.attributes,
} as Meta<ProfileComponentProps>;

export const Template: Story<ProfileComponentProps> = (args) => {
  return (
    <div id="oi" style={{ width: '80vw', margin: '0' }}>
      <ProfileLink {...args} />
    </div>
  );
};
