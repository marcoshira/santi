import { fireEvent, screen, waitFor } from '@testing-library/react';
import { MenuLink } from '.';
import { renderTheme } from '../../styles/render-theme';

const func = jest.fn();

describe('<MenuLink />', () => {
  it('should render a link', () => {
    renderTheme(<MenuLink link="http://localhost">Children</MenuLink>);
    expect(screen.getByRole('link', { name: 'Children' })).toHaveAttribute(
      'href',
      'http://localhost',
    );
  });

  it('should match snapshot', () => {
    renderTheme(<MenuLink link="http://localhost">Children</MenuLink>);
    expect(
      screen.getByRole('link', { name: 'Children' }).parentElement,
    ).toMatchSnapshot();
  });
  it('should call function', async () => {
    renderTheme(
      <MenuLink link="http://localhost" onClick={func}>
        Children
      </MenuLink>,
    );
    fireEvent.click(screen.getByRole('link', { name: 'Children' }));

    await waitFor(() => {
      expect(func).toHaveBeenCalled();
    });
  });
});
