import { fireEvent, screen, waitFor } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { FavoriteCard } from '.';
import {
  CartQuantityProps,
  ProductCardArrayProps,
} from '../../shared-types/shared-types';
import mock from '../ProfileComponent/mock';

const func = jest.fn();

const props: ProductCardArrayProps =
  mock.usersPermissionsUser.data.attributes.favorite.data.attributes.products
    .data[0];

const cart: CartQuantityProps =
  mock.usersPermissionsUser.data.attributes.cart_quantity;

describe('<FavoriteCard />', () => {
  it('should render', () => {
    renderTheme(<FavoriteCard {...props} />);

    expect(
      screen.getByRole('heading', { name: props.attributes.name }),
    ).toBeInTheDocument();
  });
  it('should render with cart', () => {
    renderTheme(<FavoriteCard {...props} cart={cart} />);

    expect(
      screen.getByRole('button', { name: 'Remove from Cart' }),
    ).toBeInTheDocument();
  });
  it('should change input', () => {
    renderTheme(<FavoriteCard {...props} cart={cart} />);
    const input = screen.getByLabelText('quantity');
    const btnP = screen.getByRole('button', { name: '+' });
    const btnM = screen.getByRole('button', { name: '-' });
    expect(input).toHaveValue('1');
    expect(btnM).toBeDisabled();
    fireEvent.click(btnM);
    fireEvent.click(btnP);
    expect(input).toHaveValue('2');
    fireEvent.click(btnM);
    fireEvent.click(btnM);
    expect(input).toHaveValue('1');
    fireEvent.change(input, { target: { value: '12' } });
  });
  it('should call functions', async () => {
    renderTheme(
      <FavoriteCard {...props} onCart={func} onFav={func} onPurchase={func} />,
    );

    fireEvent.click(screen.getByLabelText('fav'));

    await waitFor(() => {
      expect(func).toHaveBeenCalledTimes(1);
    });
    fireEvent.click(screen.getByRole('button', { name: 'Add to Cart' }));
    await waitFor(() => {
      expect(func).toHaveBeenCalledTimes(2);
    });
    fireEvent.click(screen.getByRole('button', { name: 'Buy now' }));
    await waitFor(() => {
      expect(func).toHaveBeenCalledTimes(3);
    });
  });
  it('should call noCart function', async () => {
    renderTheme(<FavoriteCard {...props} cart={cart} onCartNo={func} />);
    fireEvent.click(screen.getByRole('button', { name: 'Remove from Cart' }));

    await waitFor(() => {
      expect(func).toHaveBeenCalledTimes(4);
    });
  });
});
