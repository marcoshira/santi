import styled, { css } from 'styled-components';

export const Container = styled.footer`
  ${({ theme }) => css`
    text-align: center;
    border-top: 0.2rem solid ${theme.colors.mediumGrey};

    a {
      color: inherit;
      text-decoration: none;
    }
  `}
`;
