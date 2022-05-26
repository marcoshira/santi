import { Meta, Story } from '@storybook/react/types-6-0';
import { MenuLink, MenuLinkProps } from '.';
import { theme } from '../../styles/theme';
import { Menu } from '../Menu';
import { ToggleTheme } from '../ToggleTheme';

export default {
  title: 'MenuLink',
  component: MenuLink,
  args: {
    children: 'MenuLink',
    link: 'https://www.google.com.br/',
  },
  argTypes: {
    children: { type: 'string' },
  },
} as Meta;

export const Template: Story<MenuLinkProps> = (args) => {
  return (
    <div
      style={{
        maxWidth: '320px',
        background: theme.colors.black,
        padding: theme.spacings.large,
      }}
    >
      <Menu />
      <ToggleTheme />
      <MenuLink {...args} />
      <MenuLink {...args} />
      <MenuLink {...args} />
      <MenuLink {...args} />
    </div>
  );
};
