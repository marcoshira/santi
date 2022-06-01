import { AccountCircle } from '@styled-icons/material-outlined/AccountCircle';
import { ShoppingBag } from '@styled-icons/material-outlined/ShoppingBag';
import { Button } from '../Button';
import * as Styled from './styles';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { signOut, useSession } from 'next-auth/react';

export const NavLinks = () => {
  const { data: session } = useSession();
  const [redirect, setRedirect] = useState('/');

  useEffect(() => {
    if (typeof window === 'undefined') return;

    setRedirect(encodeURI(window.location.pathname));
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    signOut({ redirect: false });
  };

  return (
    <Styled.Container aria-label="Main menu">
      {session ? (
        <>
          <a href="#" onClick={handleClick}>
            Log Out
          </a>
          <Link href="/cart">
            <Styled.SvgContainer>
              <ShoppingBag />
            </Styled.SvgContainer>
          </Link>
          <Link href="/profile">
            <Styled.SvgContainer>
              <AccountCircle />
            </Styled.SvgContainer>
          </Link>
        </>
      ) : (
        <>
          <Link
            href={{
              pathname: '/login',
              query: {
                redirect,
              },
            }}
          >
            <a>Login</a>
          </Link>

          <Link href="/register">
            <Button>Register</Button>
          </Link>
        </>
      )}
    </Styled.Container>
  );

  // return (
  //   <Styled.Container aria-label="Main menu">
  //     <Link
  //       href={{
  //         pathname: '/login',
  //         query: {
  //           redirect,
  //         },
  //       }}
  //     >
  //       <a>Login</a>
  //     </Link>

  //     <Link href="/register">
  //       <Button>Register</Button>
  //     </Link>
  //   </Styled.Container>
  // );
};
