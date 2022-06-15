import styled, { css } from 'styled-components';

export const Wrapper = styled.a`
  ${({ theme }) => css`
    text-decoration: none;
    color: ${theme.colors.navy};
    cursor: pointer;
    min-width: 30rem;
    max-width: 40rem;

    @media ${theme.media.lteSmall} {
      max-width: 30rem;
      min-width: auto;
    }
  `}
`;

export const CardWrapper = styled.div`
  ${({ theme }) => css`
    /* border: 2px solid ${theme.colors.teal}; */
    box-shadow: 3px 3px 15px ${theme.colors.teal};
    border-radius: 15px;
    min-height: 35rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    background: ${theme.colors.footerWhite};
    transition: all 300ms ease-in-out;
    &:hover {
      opacity: 0.8;

      p {
        color: ${theme.colors.thirdColor};
      }
    }

    @media ${theme.media.lteSmall} {
      &:hover {
        opacity: 1;
      }
    }
  `}
`;

export const ImageWrapper = styled.figure`
  ${({ theme }) => css`
    margin-top: 1rem;
    display: flex;
    min-height: 26rem;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    img {
      max-height: 90%;
      max-width: 90%;
      transition: all 300ms ease-in-out;

      @media ${theme.media.lteSmall} {
        &:hover {
          opacity: 0.8;
        }
      }
    }
  `}
`;

export const TextWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    bottom: 2rem;

    p {
      margin: 1rem 0 0 0;
      font-size: 1.8rem;
      transition: all 300ms ease-in-out;
    }
  `}
`;
