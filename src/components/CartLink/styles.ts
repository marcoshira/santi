import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: absolute;
    left: 40rem;
    top: 9rem;
    width: calc(100vw - 55rem);
  `}
`;
