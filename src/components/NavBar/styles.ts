import styled, { css } from 'styled-components';
type MenuVisible = {
  visible?: boolean;
};

const menuVisible = () => css`
  visibility: visible;
  opacity: 1;
`;

export const Wrapper = styled.div<MenuVisible>`
  ${({ theme, visible }) => css`
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

export const Nav = styled.nav`
  ${({ theme }) => css`
    margin: auto;
    width: 100%;
    @media ${theme.media.lteMedium} {
      display: block;
      text-align: center;
      padding: ${theme.spacings.large} 0;
      margin: ${theme.spacings.hero} 0;
    }
  `}
`;

export const Title = styled.div`
  ${({ theme }) => css`
    display: none;
    @media ${theme.media.lteMedium} {
      display: block;
      margin-bottom: ${theme.spacings.huge};
    }

    a {
      text-decoration: none;
      color: ${theme.colors.teal};
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
