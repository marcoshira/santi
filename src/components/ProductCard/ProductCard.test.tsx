import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { ProductCard } from '.';
import { ProductCardProps } from '../../shared-types/shared-types';

const props: ProductCardProps = {
  title: 'any',
};

describe('<ProductCard />', () => {
  it('should render', () => {
    renderTheme(<ProductCard {...props} />);

    expect(screen.getByRole('heading', { name: 'Oi' })).toBeInTheDocument();
  });
});
