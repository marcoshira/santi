import { fireEvent, screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { NavBar } from '.';
import { NavBarProps } from '../../shared-types/shared-types';
import mock from '../../api/typesMock';
import { theme } from '../../styles/theme';

const props: NavBarProps = mock.data;

describe('<NavBar />', () => {
  it('should render', () => {
    renderTheme(<NavBar {...props} />);

    expect(screen.getByRole('link', { name: 'Console' })).toBeInTheDocument();

    const button = screen.getByLabelText('Open/Close Menu');
    const menuContainer = button.nextSibling;

    expect(button).toHaveStyleRule('display', 'none');
    expect(button).toHaveStyleRule('display', 'flex', {
      media: theme.media.lteMedium,
    });

    expect(menuContainer).toHaveStyleRule('opacity', '0', {
      media: theme.media.lteMedium,
    });
    expect(screen.getByLabelText('Open Menu')).toBeInTheDocument();

    fireEvent.click(button);
    expect(menuContainer).toHaveStyleRule('opacity', '1', {
      media: theme.media.lteMedium,
    });
    expect(screen.getByLabelText('Close Menu')).toBeInTheDocument();

    fireEvent.click(menuContainer);
    expect(menuContainer).toHaveStyleRule('opacity', '0', {
      media: theme.media.lteMedium,
    });
    expect(screen.getByLabelText('Open Menu')).toBeInTheDocument();
  });
});
