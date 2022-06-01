import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    background: ${theme.colors.background2};
    position: absolute;
    top: 0;
  `}
`;
