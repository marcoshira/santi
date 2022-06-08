import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { CartLink } from '.';
import { CartLinkProps } from '../../shared-types/shared-types';

const props: CartLinkProps = {
  title: 'any',
};

describe('<CartLink />', () => {
  it('should render', () => {
    renderTheme(<CartLink {...props} />);

    expect(screen.getByRole('heading', { name: 'Oi' })).toBeInTheDocument();
  });
});
