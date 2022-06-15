import * as Styled from './styles';
import { MenuLink } from '../MenuLink';
import React from 'react';
import { useState } from 'react';
import { NavBarProps } from '../../shared-types/shared-types';
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';
import { Heading } from '../Heading';

export const NavBar = ({ productTypes }: NavBarProps) => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Styled.Button
        onClick={() => setVisible(!visible)}
        aria-label="Open/Close Menu"
      >
        {visible ? (
          <CloseIcon aria-label="Close Menu" />
        ) : (
          <MenuIcon aria-label="Open Menu" />
        )}
      </Styled.Button>
      <Styled.Wrapper visible={visible} onClick={() => setVisible(!visible)}>
        <Styled.Nav>
          <Styled.Title>
            <Heading size="small" uppercase>
              <a href="/" target="_self">
                Santi
              </a>
            </Heading>
          </Styled.Title>
          {productTypes.data.map((prod) => (
            <MenuLink key={prod.id} link={`/types/${prod.id}`}>
              {prod.attributes.title}
            </MenuLink>
          ))}
        </Styled.Nav>
      </Styled.Wrapper>
    </>
  );
};
