import styled, { css } from 'styled-components';
import { Title as Heading } from '../Heading/styles';

type MenuVisible = {
  visible?: boolean;
};

const menuVisible = () => css`
  visibility: visible;
  opacity: 1;
`;

export const Container = styled.div<MenuVisible>`
  ${({ theme, visible }) => css`
    position: fixed;
    z-index: 5;
    top: 0;
    left: 0;
    right: 0;
    border-bottom: 0.3rem solid ${theme.colors.teal};
    background: ${theme.colors.purple};
    transition: all 300ms ease-in-out;

    & ${Heading} {
      margin-top: 0;
      margin-bottom: 0;
    }

    @media ${theme.media.lteMedium} {
      height: 100vh;
      visibility: hidden;
      opacity: 0;
      ${visible && menuVisible()}
      border-bottom: none;

      & ${Heading} {
        padding-bottom: ${theme.spacings.large};
        display: flex;
        justify-content: center;
      }
    }
  `}
`;

export const MenuContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media ${theme.media.lteMedium} {
      display: block;
      text-align: center;
      padding: ${theme.spacings.xxlarge} 0;
    }
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css`
    z-index: 6;
    position: fixed;
    top: 2rem;
    right: 2rem;
    width: 4rem;
    height: 4rem;
    background: ${theme.colors.thirdColor};
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
