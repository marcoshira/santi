import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { ProductGrid } from '.';
import { ProductGridProps } from '../../shared-types/shared-types';

const props: ProductGridProps = {
  title: 'any',
};

describe('<ProductGrid />', () => {
  it('should render', () => {
    renderTheme(<ProductGrid {...props} />);

    expect(screen.getByRole('heading', { name: 'Oi' })).toBeInTheDocument();
  });
});
