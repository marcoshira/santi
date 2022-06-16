import styled, { css } from 'styled-components';
import { Title } from '../Heading/styles';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: absolute;
    left: 40rem;
    top: 9rem;
    width: calc(100vw - 50rem);

    @media ${theme.media.lteMedium} {
      width: 100%;
      left: auto;
      top: 6rem;
      margin: 0 auto;

      > ${Title} {
        margin-left: ${theme.spacings.ltlarge};
      }
      p {
        margin-left: ${theme.spacings.ltlarge};
      }
    }
  `}
`;
