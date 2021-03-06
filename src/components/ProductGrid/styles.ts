import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    /* width: 100%; */
    max-width: 110rem;
    margin: 0 auto;
    display: grid;
    /* position: absolute;
    top: 8rem;
    left: 35rem; */
    margin-left: 33rem;
    margin-top: 8rem;
    grid-template-columns: repeat(auto-fill, minmax(32rem, 1fr));
    margin-bottom: 2rem;
    gap: ${theme.spacings.xlarge};
    padding: ${theme.spacings.small};
    @media ${theme.media.lteSmall} {
      margin-left: 0rem;
      margin-right: 0rem;
      margin-top: 7rem;
      padding: ${theme.spacings.small} ${theme.spacings.large};
      max-width: 100vw;
      display: flex;
      flex-direction: column;
    }
  `}
`;
