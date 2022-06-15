import styled, { css } from 'styled-components';
import { Wrapper as Btn } from '../Button/styles';
import { Title } from '../Heading/styles';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    width: 100%;
    box-shadow: 3px 3px 15px ${theme.colors.teal};
    border-radius: 15px;
    color: ${theme.colors.navy};
    background: ${theme.colors.footerWhite};
    position: relative;
    padding: ${theme.spacings.small} 0;
    margin-bottom: ${theme.spacings.ltmedium};

    @media ${theme.media.lteMedium} {
      flex-direction: column;
      min-height: 45rem;
      width: 85%;
      justify-content: center;
      align-items: center;
      padding-bottom: ${theme.spacings.xhero};
      margin: ${theme.spacings.medium} auto;
    }

    #close {
      position: absolute;
      top: 2rem;
      right: 2rem;
      svg {
        height: 3rem;
      }
    }

    a {
      cursor: pointer;

      &:hover {
        img {
          opacity: 0.6;
        }
      }
    }

    img {
      border-radius: 10px;
      height: 20rem;
      transition: ${theme.transitions.faster};
      @media ${theme.media.lteMedium} {
        height: 15rem;
      }
    }

    ${Title} {
      margin: 0;
    }

    ${Btn} {
      a {
        text-decoration: none;
        color: ${theme.colors.footerWhite};
      }
      position: absolute;
      bottom: 2rem;
      right: 4rem;
      padding: ${theme.spacings.xsmall} ${theme.spacings.ltlarge};
      border: 2px solid ${theme.colors.teal};
      background: ${theme.colors.teal};
      color: ${theme.colors.footerWhite};
      border-radius: ${theme.spacings.tiny};
      margin-left: 0;
      &:hover {
        background: ${theme.colors.hoverTeal};
      }
      &::after {
        height: 0;
      }
      &:disabled {
        background: ${theme.colors.mediumGrey};
        color: ${theme.colors.footerWhite};
        border: 2px solid ${theme.colors.mediumGrey};

        &:hover {
          background: ${theme.colors.mediumGrey};
          color: ${theme.colors.white};
          border: 2px solid ${theme.colors.mediumGrey};
          cursor: not-allowed;
        }

        &::after {
          content: none;
        }
      }

      @media ${theme.media.lteMedium} {
        left: 2rem;
        right: 2rem;
      }
    }
  `}
`;

export const ContentWrapper = styled.div`
  ${({ theme }) => css`
    @media ${theme.media.lteMedium} {
      width: 100%;
      padding: ${theme.spacings.medium};
    }
    a {
      text-decoration: none;
      color: ${theme.colors.navy};
      transition: ${theme.transitions.faster};
      &:hover {
        color: ${theme.colors.thirdColor};
      }
    }

    #date {
      font-size: ${theme.font.sizes.small};
      color: ${theme.colors.gray6};
      position: absolute;
      bottom: 0.5rem;

      @media ${theme.media.lteMedium} {
        bottom: 6.5rem;
      }
    }
  `}
`;

export const ImageWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    width: 45%;

    @media ${theme.media.lteMedium} {
      /* display: block; */
      width: auto;
      /* position: absolute;
      top: 2.5rem; */
    }
  `}
`;
