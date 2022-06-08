import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { FavoriteCard } from '.';
import { FavoriteCardProps } from '../../shared-types/shared-types';

const props: FavoriteCardProps = {
  title: 'any',
};

describe('<FavoriteCard />', () => {
  it('should render', () => {
    renderTheme(<FavoriteCard {...props} />);

    expect(screen.getByRole('heading', { name: 'Oi' })).toBeInTheDocument();
  });
});
