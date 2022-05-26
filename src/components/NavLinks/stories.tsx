import { Meta, Story } from '@storybook/react/types-6-0';
import { NavLinks } from '.';
import { NavLinksProps } from '../../shared-types/shared-types';

export default {
  title: 'NavLinks',
  component: NavLinks,
  args: {
    authenticated: false,
  },
} as Meta;

export const Template: Story<NavLinksProps> = (args) => {
  return (
    <div>
      <NavLinks {...args} />
    </div>
  );
};
