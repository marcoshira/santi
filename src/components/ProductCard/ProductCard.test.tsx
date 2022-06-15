import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { ProductCard } from '.';
import { ProductCardProps } from '../../shared-types/shared-types';
import mock from './mock';

const props: ProductCardProps = mock;

describe('<ProductCard />', () => {
  it('should render', () => {
    const { container } = renderTheme(<ProductCard {...props} />);

    expect(screen.getByText(mock.attributes.name)).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
