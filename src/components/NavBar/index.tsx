import * as Styled from './styles';
import { KeyboardArrowLeft as Left } from '@styled-icons/material-outlined/KeyboardArrowLeft';
import { KeyboardArrowRight as Right } from '@styled-icons/material-outlined/KeyboardArrowRight';
import { MenuLink } from '../MenuLink';
import React, { useState } from 'react';

export const NavBar = () => {
  const [NavBarVisible, setNavBarVisible] = useState(true);

  const handleOpenCloseNavBar = (event: React.MouseEvent) => {
    event.preventDefault();
    setNavBarVisible((v) => !v);
  };

  return (
    <>
      <Styled.OpenClose
        navBarVisible={NavBarVisible}
        href="#"
        aria-label="Open or close NavBar"
        title="Open or close NavBar"
        onClick={handleOpenCloseNavBar}
      >
        {NavBarVisible ? (
          <Left aria-label="Close NavBar" />
        ) : (
          <Right aria-label="Open NavBar" />
        )}
      </Styled.OpenClose>
      <Styled.Wrapper
        navBarVisible={NavBarVisible}
        aria-hidden={!NavBarVisible}
      >
        <Styled.Nav>
          <MenuLink link="/consoles">Consoles</MenuLink>
          <MenuLink link="/switch-games">Jogos para Switch</MenuLink>
          <MenuLink link="/ps5=games">Jogos para PS5</MenuLink>
        </Styled.Nav>
      </Styled.Wrapper>
    </>
  );
};
