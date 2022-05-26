import { screen } from '@testing-library/react';
import { GoTop } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<GoTop />', () => {
  it('should render a go to top button', () => {
    const { container } = renderTheme(<GoTop />);
    expect(screen.getByTitle('Go to top')).toBeInTheDocument();
    expect(screen.getByTitle('Go to top')).toHaveAttribute('href', '#');
    expect(container).toMatchSnapshot();
  });
});
