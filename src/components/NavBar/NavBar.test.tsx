import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { NavBar } from '.';
import { NavBarProps } from '../../shared-types/shared-types';

const props: NavBarProps = {
  title: 'any',
};

describe('<NavBar />', () => {
  it('should render', () => {
    renderTheme(<NavBar {...props} />);

    expect(screen.getByRole('heading', { name: 'Oi' })).toBeInTheDocument();
  });
});
