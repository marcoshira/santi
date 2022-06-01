import * as Styled from './styles';
import { MenuLink } from '../MenuLink';
import React from 'react';
import { NavBarProps } from '../../shared-types/shared-types';

export const NavBar = ({ productTypes }: NavBarProps) => {
  return (
    <Styled.Wrapper>
      <Styled.Nav>
        {productTypes.data.map((prod) => (
          <MenuLink key={prod.id} link={`/types/${prod.id}`}>
            {prod.attributes.title}
          </MenuLink>
        ))}
      </Styled.Nav>
    </Styled.Wrapper>
  );
};
