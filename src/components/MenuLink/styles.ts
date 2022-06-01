import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    display: block;
    color: ${theme.colors.teal};
    text-decoration: none;
    margin-bottom: ${theme.spacings.ltlarge};
    font-size: 1.8rem;
    border-right: 0.5rem solid ${theme.colors.teal};
    transition: all 300ms ease-in-out;

    &:hover {
      border-right: 0.5rem solid ${theme.colors.thirdColor};
      color: ${theme.colors.thirdColor};
    }
  `}
`;
