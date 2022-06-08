import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { PurchaseLink } from '.';
import { PurchaseAttributesProps } from '../../shared-types/shared-types';
import mock from '../ProfileComponent/mock';

const props: PurchaseAttributesProps = {
  Item: mock.data.usersPermissionsUser.data.attributes.puchase.data.attributes
    .Item,
};

describe('<PurchaseLink />', () => {
  it('should render', () => {
    renderTheme(<PurchaseLink {...props} />);

    expect(screen.getByRole('heading', { name: 'Oi' })).toBeInTheDocument();
  });
});
