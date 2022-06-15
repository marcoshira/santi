import { fireEvent, screen, waitFor } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { ProfileLink } from '.';
import { ProfileComponentProps } from '../../shared-types/shared-types';
import mock from '../ProfileComponent/mock';

const func = jest.fn();

const props: ProfileComponentProps = mock.usersPermissionsUser.data.attributes;

describe('<ProfileLink />', () => {
  it('should render', () => {
    renderTheme(<ProfileLink {...props} />);

    expect(
      screen.getByRole('heading', { name: 'My Profile' }),
    ).toBeInTheDocument();
  });
  it('should call function', async () => {
    renderTheme(<ProfileLink onSubmit={func} {...props} />);
    fireEvent.click(screen.getByRole('button'));

    await waitFor(() => {
      expect(func).toHaveBeenCalled();
    });
  });
  it('should change input', async () => {
    renderTheme(<ProfileLink onSubmit={func} {...props} />);
    const input = screen.getByLabelText('Username');
    const input2 = screen.getByLabelText('Telephone');
    const input3 = screen.getByLabelText('Address');
    fireEvent.change(input, { target: { value: 'abc' } });
    fireEvent.change(input2, { target: { value: 'abd' } });
    fireEvent.change(input3, { target: { value: 'abe' } });

    expect(input).toHaveValue('abc');
    expect(input2).toHaveValue('abd');
    expect(input3).toHaveValue('abe');
  });
  it('should render with errorMessage', () => {
    const { container } = renderTheme(
      <ProfileLink errorMessage="oi" {...props} />,
    );
    expect(screen.getByText('oi')).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});
