import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { FormLogin } from '.';
import { FormLoginProps } from '../../shared-types/shared-types';

const props: FormLoginProps = {
  title: 'any',
};

describe('<FormLogin />', () => {
  it('should render', () => {
    renderTheme(<FormLogin {...props} />);

    expect(screen.getByRole('heading', { name: 'Oi' })).toBeInTheDocument();
  });
});
