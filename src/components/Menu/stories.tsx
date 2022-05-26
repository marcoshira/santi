import { Meta, Story } from '@storybook/react/types-6-0';
import { Menu } from '.';
import { ToggleTheme } from '../ToggleTheme';

export default {
  title: 'Menu',
  component: Menu,
} as Meta;

export const Template: Story = () => {
  return (
    <div style={{ height: '300vh', background: 'white' }}>
      <ToggleTheme />
      <Menu />
    </div>
  );
};
