import { fireEvent, screen, waitFor } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { CartCard } from '.';
import { CartQuantityAttributesProps } from '../../shared-types/shared-types';
import mock from '../ProfileComponent/mock';

const func = jest.fn();
const func2 = jest.fn();

const props: CartQuantityAttributesProps =
  mock.usersPermissionsUser.data.attributes.cart_quantity.data.attributes
    .cartQuantity[0];

describe('<CartCard />', () => {
  it('should render', () => {
    renderTheme(<CartCard {...props} />);

    expect(
      screen.getByRole('heading', { name: 'PlayStation 5' }),
    ).toBeInTheDocument();
  });
  it('should render with onCart', async () => {
    renderTheme(<CartCard {...props} onCart={func} />);
    fireEvent.click(screen.getByRole('button', { name: 'Remove from Cart' }));
    await waitFor(() => {
      expect(func).toHaveBeenCalled();
    });
  });
  it('should render with onPurchase', async () => {
    renderTheme(<CartCard {...props} onPurchase={func2} />);
    fireEvent.click(screen.getByRole('button', { name: 'Buy Now' }));

    await waitFor(() => {
      expect(func2).toHaveBeenCalled();
    });
  });
});
