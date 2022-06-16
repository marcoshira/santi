import styled, { css } from 'styled-components';
import { Container as MenuLink } from '../MenuLink/styles';

type MenuVisible = {
  visible?: boolean;
};

const menuVisible = () => css`
  visibility: visible;
  opacity: 1;
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    position: relative;
    background: ${theme.colors.background2};

    @media ${theme.media.lteMedium} {
      max-width: 100vw;
    }
  `}
`;

export const Content = styled.div`
  width: 100%;
`;

export const NavBar = styled.nav`
  ${({ theme }) => css`
    margin: auto;
    width: 100%;
    a {
      text-decoration: none;
      color: inherit;
      transition: ${theme.transitions.fast};

      &:hover {
        color: ${theme.colors.thirdColor};
      }
    }

    ${MenuLink} {
      cursor: pointer;
    }

    @media ${theme.media.lteMedium} {
      display: block;
      text-align: center;
      margin: auto 0;

      ${MenuLink} {
        font-size: ${theme.font.sizes.medium};
      }
    }
  `}
`;

export const Nav = styled.div<MenuVisible>`
  ${({ theme, visible }) => css`
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

    @media ${theme.media.lteMedium} {
      z-index: 5;
      visibility: hidden;
      opacity: 0;
      ${visible && menuVisible()}
      border: none;
      max-width: 100vw;
      padding: 0;
      bottom: 0;
      right: 0;
      overflow-x: hidden;
    }
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css`
    z-index: 6;
    position: fixed;
    top: 1rem;
    left: 1rem;
    width: 4rem;
    height: 4rem;
    background: ${theme.colors.purple};
    color: ${theme.colors.white};
    display: none;
    border: none;

    > svg {
      width: 2.5rem;
      height: 2.5rem;
    }

    @media ${theme.media.lteMedium} {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `}
`;
