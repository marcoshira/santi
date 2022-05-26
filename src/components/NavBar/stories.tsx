import { Meta, Story } from '@storybook/react/types-6-0';
import { NavBar } from '.';
import { Menu } from '../Menu';
import { ToggleTheme } from '../ToggleTheme';

export default {
  title: 'NavBar',
  component: NavBar,
} as Meta;

export const Template: Story = () => {
  return (
    <div>
      <Menu />
      <ToggleTheme />
      <NavBar />
    </div>
  );
};
