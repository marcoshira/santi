import { Meta, Story } from '@storybook/react/types-6-0';
import { NavBar } from '.';
import { Menu } from '../Menu';
import { ToggleTheme } from '../ToggleTheme';
import mock from '../../api/typesMock';
import { NavBarProps } from '../../shared-types/shared-types';

export default {
  title: 'NavBar',
  component: NavBar,
  args: mock.data,
} as Meta<NavBarProps>;

export const Template: Story<NavBarProps> = (args) => {
  return (
    <div>
      <Menu />
      <ToggleTheme />
      <NavBar {...args} />
    </div>
  );
};
