import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { ProductPage } from '.';
import { ProductCardProps } from '../../shared-types/shared-types';

const props: ProductCardProps = {
  title: 'any',
};

describe('<ProductPage />', () => {
  it('should render', () => {
    renderTheme(<ProductPage {...props} />);

    expect(screen.getByRole('heading', { name: 'Oi' })).toBeInTheDocument();
  });
});
