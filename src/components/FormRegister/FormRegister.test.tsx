import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { FormRegister } from '.';
import { FormRegisterProps } from '../../shared-types/shared-types';

const props: FormRegisterProps = {
  title: 'any',
};

describe('<FormRegister />', () => {
  it('should render', () => {
    renderTheme(<FormRegister {...props} />);

    expect(screen.getByRole('heading', { name: 'Oi' })).toBeInTheDocument();
  });
});
