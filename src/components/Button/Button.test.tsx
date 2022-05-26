import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Button } from '.';
import { ButtonProps } from '../../shared-types/shared-types';

const props: ButtonProps = {
  title: 'any',
};

describe('<Button />', () => {
  it('should render', () => {
    renderTheme(<Button {...props} />);

    expect(screen.getByRole('heading', { name: 'Oi' })).toBeInTheDocument();
  });
});
