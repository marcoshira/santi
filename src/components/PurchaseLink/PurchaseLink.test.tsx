import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { PurchaseLink } from '.';
import { PurchaseAttributesProps } from '../../shared-types/shared-types';
import mock from '../ProfileComponent/mock';

const teste = {
  Item: [],
};

const props: PurchaseAttributesProps =
  mock.usersPermissionsUser.data.attributes.puchase.data.attributes;

describe('<PurchaseLink />', () => {
  it('should render', () => {
    const { container } = renderTheme(<PurchaseLink {...props} />);

    expect(
      screen.getByRole('heading', { name: 'Purchases' }),
    ).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
  it('should render without purchases', () => {
    renderTheme(<PurchaseLink {...teste} />);

    expect(screen.getByText('No Purchases Yet')).toBeInTheDocument();
  });
});
