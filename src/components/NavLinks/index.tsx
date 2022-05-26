import { NavLinksProps } from '../../shared-types/shared-types';
import { AccountCircle } from '@styled-icons/material-outlined/AccountCircle';
import { Button } from '../Button';
import * as Styled from './styles';

export const NavLinks = ({ authenticated = false }: NavLinksProps) => {
  return (
    <Styled.Container aria-label="Main menu">
      {authenticated ? (
        <>
          <Button>Log Out</Button>
          <a href="/profile">
            <AccountCircle />
          </a>
        </>
      ) : (
        <>
          <Button>Log in</Button>
          <Button>Register</Button>
        </>
      )}
    </Styled.Container>
  );
};
