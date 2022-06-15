import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { FavoriteLink } from '.';
import { FavoriteProps } from '../../shared-types/shared-types';
import mock from '../ProfileComponent/mock';

const props: FavoriteProps = mock.usersPermissionsUser.data.attributes.favorite;

const teste = {
  data: {
    id: 'oi',
    attributes: {
      products: {
        data: [],
      },
    },
  },
};

describe('<FavoriteLink />', () => {
  it('should render', () => {
    renderTheme(<FavoriteLink {...props} />);

    expect(
      screen.getByRole('heading', { name: 'Favorites' }),
    ).toBeInTheDocument();
  });
  it('should render', () => {
    renderTheme(<FavoriteLink {...teste} />);

    expect(screen.getByText('No Favorites Yet')).toBeInTheDocument();
  });
});
