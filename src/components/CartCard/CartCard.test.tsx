import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { CartCard } from '.';
import { CartCardProps } from '../../shared-types/shared-types';

const props: CartCardProps = {
  title: 'any',
};

describe('<CartCard />', () => {
  it('should render', () => {
    renderTheme(<CartCard {...props} />);

    expect(screen.getByRole('heading', { name: 'Oi' })).toBeInTheDocument();
  });
});
