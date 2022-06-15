import { renderTheme } from '../../styles/render-theme';
import { ProductGrid } from '.';
import { ProductGridProps } from '../../shared-types/shared-types';
import mock from './mock';

const props: ProductGridProps = mock;

describe('<ProductGrid />', () => {
  it('should render', () => {
    const { container } = renderTheme(<ProductGrid {...props} />);

    expect(container).toMatchSnapshot();
  });
});
