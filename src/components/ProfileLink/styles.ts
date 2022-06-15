import styled, { css } from 'styled-components';
import { Title } from '../Heading/styles';
import { Wrapper as Btn } from '../Button/styles';

export const Wrapper = styled.form`
  ${({ theme }) => css`
    box-shadow: 3px 3px 15px ${theme.colors.teal};
    border-radius: 15px;
    background: ${theme.colors.footerWhite};
    width: 45%;
    padding: ${theme.spacings.ltlarge};
    padding-top: ${theme.spacings.small};
    position: relative;
    padding-bottom: ${theme.spacings.xhero};

    margin-left: 50rem;
    margin-top: 15rem;

    @media ${theme.media.lteMedium} {
      margin: 13rem auto;
      width: 85%;
      height: 45rem;
    }

    p {
      position: absolute;
      bottom: 0.5rem;
      left: 2rem;

      @media ${theme.media.lteMedium} {
        bottom: 6rem;
        left: 3rem;
      }
    }

    ${Title} {
      margin-top: 0;
    }

    ${Btn} {
      a {
        text-decoration: none;
        color: ${theme.colors.footerWhite};
      }
      position: absolute;
      bottom: 1.5rem;
      right: 4rem;
      /* width: 15rem; */
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
        left: 3rem;
        right: 3rem;
      }
    }
  `}
`;
