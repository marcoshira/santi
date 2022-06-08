import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { FavoriteLink } from '.';
import { FavoriteLinkProps } from '../../shared-types/shared-types';

const props: FavoriteLinkProps = {
  title: 'any',
};

describe('<FavoriteLink />', () => {
  it('should render', () => {
    renderTheme(<FavoriteLink {...props} />);

    expect(screen.getByRole('heading', { name: 'Oi' })).toBeInTheDocument();
  });
});
