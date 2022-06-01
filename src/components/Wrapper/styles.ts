import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    max-width: 80rem;
    margin: 20rem auto;
    background: ${theme.colors.footerWhite};
    padding: ${theme.spacings.xlarge};
  `}
`;
