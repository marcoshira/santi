import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { ProfileLink } from '.';
import { ProfileLinkProps } from '../../shared-types/shared-types';

const props: ProfileLinkProps = {
  title: 'any',
};

describe('<ProfileLink />', () => {
  it('should render', () => {
    renderTheme(<ProfileLink {...props} />);

    expect(screen.getByRole('heading', { name: 'Oi' })).toBeInTheDocument();
  });
});
