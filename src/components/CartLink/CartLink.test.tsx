import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { CartLink } from '.';
import { CartQuantityProps } from '../../shared-types/shared-types';
import mock from '../ProfileComponent/mock';

const props: CartQuantityProps =
  mock.usersPermissionsUser.data.attributes.cart_quantity;

const teste = {
  data: {
    id: 'oi',
    attributes: {
      cartQuantity: [],
    },
  },
};

describe('<CartLink />', () => {
  it('should render', () => {
    renderTheme(<CartLink {...props} />);

    expect(screen.getByRole('heading', { name: 'Cart' })).toBeInTheDocument();
  });
  it('should render without cart', () => {
    renderTheme(<CartLink {...teste} />);

    expect(screen.getByText('Nothing in Cart')).toBeInTheDocument();
  });
});
