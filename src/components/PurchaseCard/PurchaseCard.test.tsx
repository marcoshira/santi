import { fireEvent, screen, waitFor } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { PurchaseCard } from '.';
import { ItemProps } from '../../shared-types/shared-types';
import mock from '../ProfileComponent/mock';

const func = jest.fn();

const props: ItemProps =
  mock.usersPermissionsUser.data.attributes.puchase.data.attributes.Item[0];

describe('<PurchaseCard />', () => {
  it('should render', () => {
    const { container } = renderTheme(<PurchaseCard {...props} />);

    expect(
      screen.getByRole('heading', { name: props.product.data.attributes.name }),
    ).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
  it('should call function', async () => {
    renderTheme(<PurchaseCard onPurchase={func} {...props} />);

    fireEvent.click(screen.getByLabelText('close'));

    await waitFor(() => {
      expect(func).toHaveBeenCalled();
    });
  });
});
