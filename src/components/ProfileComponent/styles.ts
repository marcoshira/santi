import styled, { css } from 'styled-components';
import { Container as MenuLink } from '../MenuLink/styles';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    position: relative;
    background: ${theme.colors.background2};
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    width: 100%;
  `}
`;

export const NavBar = styled.nav`
  ${({ theme }) => css`
    margin: auto;
    width: 100%;

    ${MenuLink} {
      cursor: pointer;
    }
  `}
`;

export const Nav = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.background2};
    border-right: 2px solid ${theme.colors.teal};
    padding: ${theme.spacings.large};
    display: flex;
    flex-direction: column;
    position: fixed;
    z-index: 1;
    width: 100%;
    max-width: 27rem;
    height: 100vh;
    top: 0;
    left: 0;
    transition: all 300ms ease-in-out;
    overflow-y: auto;
  `}
`;
