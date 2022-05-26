import { fireEvent, screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { ToggleTheme } from '.';
import { theme } from '../../styles/theme';

describe('<ToggleTheme />', () => {
  beforeEach(() => {
    localStorage.setItem(
      'theme',
      JSON.stringify({ ...theme, name: 'inverted' }),
    );
  });

  afterEach(() => {
    localStorage.removeItem('theme');
  });

  it('should render with default theme', () => {
    localStorage.setItem(
      'theme',
      JSON.stringify({ ...theme, name: 'default' }),
    );
    renderTheme(<ToggleTheme />);

    expect(screen.getByLabelText('Icon Container')).toHaveStyle({
      right: '0.3rem',
    });
  });

  it('should render with inverted theme', () => {
    renderTheme(<ToggleTheme />);

    expect(screen.getByLabelText('Icon Container')).toHaveStyle({
      right: '2.5rem',
    });
  });

  it('should toggle between themes', () => {
    const { container } = renderTheme(<ToggleTheme />);

    const label = screen.getByLabelText('Toggle light and dark modes');
    const icon = screen.getByLabelText('Icon Container');

    fireEvent.click(label);
    expect(icon).toHaveStyle({
      right: '0.3rem',
    });

    fireEvent.click(label);
    expect(icon).toHaveStyle({
      right: '2.5rem',
    });

    expect(container).toMatchSnapshot();
  });

  it('should render without theme', () => {
    localStorage.removeItem('theme');
    renderTheme(<ToggleTheme />);

    expect(screen.getByLabelText('Icon Container')).toHaveStyle({
      right: '0.3rem',
    });
  });
});
