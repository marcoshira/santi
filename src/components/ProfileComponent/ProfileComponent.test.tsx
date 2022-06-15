import { fireEvent, screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { ProfileComponent } from '.';
import { ProfileComponentProps } from '../../shared-types/shared-types';
import mock from './mock';
import { theme } from '../../styles/theme';

const props: ProfileComponentProps = mock.usersPermissionsUser.data.attributes;

describe('<ProfileComponent />', () => {
  it('should render', () => {
    renderTheme(<ProfileComponent {...props} />);

    const button = screen.getByLabelText('Open/Close Menu');
    const menuContainer = button.nextSibling;

    expect(button).toHaveStyleRule('display', 'none');
    expect(button).toHaveStyleRule('display', 'flex', {
      media: theme.media.lteMedium,
    });

    expect(screen.getByLabelText('Close Menu')).toBeInTheDocument();

    fireEvent.click(button);
    expect(menuContainer).toHaveStyleRule('opacity', '0', {
      media: theme.media.lteMedium,
    });
    expect(screen.getByLabelText('Open Menu')).toBeInTheDocument();

    fireEvent.click(menuContainer);
    expect(menuContainer).toHaveStyleRule('opacity', '1', {
      media: theme.media.lteMedium,
    });
    expect(screen.getByLabelText('Close Menu')).toBeInTheDocument();
  });
  it('should render profile', () => {
    renderTheme(<ProfileComponent {...props} redirect="profile" />);
    expect(
      screen.getByRole('heading', { name: 'My Profile' }),
    ).toBeInTheDocument();
  });
  it('should render purchases', () => {
    renderTheme(<ProfileComponent {...props} redirect="purchases" />);
    expect(
      screen.getByRole('heading', { name: 'Purchases' }),
    ).toBeInTheDocument();
  });
  it('should render cart', () => {
    renderTheme(<ProfileComponent {...props} redirect="cart" />);
    expect(screen.getByRole('heading', { name: 'Cart' })).toBeInTheDocument();
  });
  it('should render favorites', () => {
    renderTheme(<ProfileComponent {...props} redirect="favorites" />);
    expect(
      screen.getByRole('heading', { name: 'Favorites' }),
    ).toBeInTheDocument();
  });
  it('should change between pages', () => {
    renderTheme(<ProfileComponent {...props} />);
    const profile = screen.getByText('Profile');
    const purchase = screen.getByText('Purchases');
    const cart = screen.getByText('Cart');
    const favorites = screen.getByText('Favorites');
    fireEvent.click(profile);
    expect(
      screen.getByRole('heading', { name: 'My Profile' }),
    ).toBeInTheDocument();
    fireEvent.click(purchase);
    expect(
      screen.getByRole('heading', { name: 'Purchases' }),
    ).toBeInTheDocument();
    fireEvent.click(cart);
    expect(screen.getByRole('heading', { name: 'Cart' })).toBeInTheDocument();
    fireEvent.click(favorites);
    expect(
      screen.getByRole('heading', { name: 'Favorites' }),
    ).toBeInTheDocument();
  });
  it('should not render', () => {
    renderTheme(<ProfileComponent {...props} redirect="null" />);
    expect(screen.getByRole('heading', { name: 'SANTI' })).toBeInTheDocument();
  });
});
