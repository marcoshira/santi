import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: ${theme.colors.teal};
    margin-left: ${theme.spacings.large};

    &:hover {
      color: ${theme.colors.thirdColor};
    }
  `};
`;
