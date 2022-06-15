import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    background: ${theme.colors.background2};
    position: absolute;
    top: 0;
    bottom: 0;
    @media ${theme.media.lteMedium} {
      overflow-x: hidden;
      max-width: 95vw;
    }
  `}
`;
