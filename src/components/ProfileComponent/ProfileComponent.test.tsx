import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { ProfileComponent } from '.';
import { ProfileComponentProps } from '../../shared-types/shared-types';

const props: ProfileComponentProps = {
  title: 'any',
};

describe('<ProfileComponent />', () => {
  it('should render', () => {
    renderTheme(<ProfileComponent {...props} />);

    expect(screen.getByRole('heading', { name: 'Oi' })).toBeInTheDocument();
  });
});
