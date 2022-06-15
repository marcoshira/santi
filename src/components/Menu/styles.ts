import styled, { css } from 'styled-components';
import { Title as Heading } from '../Heading/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    position: fixed;
    z-index: 6;
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
      width: 100vw;
      right: auto;
    }
  `}
`;

export const MenuContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media ${theme.media.lteMedium} {
    }
  `}
`;
