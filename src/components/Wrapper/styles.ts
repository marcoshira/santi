import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    max-width: 80rem;
    margin: 12rem auto;
    background: ${theme.colors.background2};
    padding: ${theme.spacings.xlarge};
    height: 100vh;

    @media ${theme.media.lteSmall} {
      padding: ${theme.spacings.small};
    }
  `}
`;
