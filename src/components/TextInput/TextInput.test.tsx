import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { TextInput } from '.';
import { TextInputProps } from '../../shared-types/shared-types';

const props: TextInputProps = {
  title: 'any',
};

describe('<TextInput />', () => {
  it('should render', () => {
    renderTheme(<TextInput {...props} />);

    expect(screen.getByRole('heading', { name: 'Oi' })).toBeInTheDocument();
  });
});
