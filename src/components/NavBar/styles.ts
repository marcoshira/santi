import styled, { css } from 'styled-components';

type NavBarBehaviorProps = {
  navBarVisible: boolean;
};

const wrapperChanger = (navBarVisible: boolean) => css`
  left: ${navBarVisible ? '0' : '-27rem'};
  overflow-y: ${navBarVisible ? 'auto' : 'hidden'};
`;

export const Wrapper = styled.div<NavBarBehaviorProps>`
  ${({ theme, navBarVisible }) => css`
    background: ${theme.colors.background2};
    border-right: 2px solid ${theme.colors.teal};
    padding: ${theme.spacings.large};
    display: flex;
    position: fixed;
    z-index: 1;
    width: 100%;
    max-width: 27rem;
    height: 100vh;
    top: 0;
    left: 0;
    transition: all 300ms ease-in-out;
    overflow-y: auto;
    ${wrapperChanger(navBarVisible)}
  `}
`;

export const Nav = styled.nav`
  margin: auto;
  width: 100%;
`;

const buttonChanger = (menuVisible: boolean) => css`
  left: ${menuVisible ? '21rem' : '1.5rem'};
`;

export const OpenClose = styled.a<NavBarBehaviorProps>`
  ${({ theme, navBarVisible }) => css`
    position: fixed;
    top: 7rem;
    color: ${theme.colors.teal};
    background: rgb(0, 0, 0, 0);
    z-index: 2;
    width: 4.5rem;
    height: 4.5rem;
    transition: all 300ms ease-in-out;
    ${buttonChanger(navBarVisible)}

    &:hover {
      color: ${theme.colors.thirdColor};
    }
  `}
`;
