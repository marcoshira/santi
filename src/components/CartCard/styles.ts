import styled, { css } from 'styled-components';
import { Wrapper as Btn } from '../Button/styles';
import { Title } from '../Heading/styles';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    width: 100%;
    overflow-x: hidden;
    box-shadow: 3px 3px 15px ${theme.colors.teal};
    border-radius: 15px;
    color: ${theme.colors.navy};
    background: ${theme.colors.footerWhite};
    position: relative;
    padding: ${theme.spacings.small} 0;
    margin-bottom: ${theme.spacings.ltmedium};

    @media ${theme.media.lteMedium} {
      flex-direction: column;
      min-height: 50rem;
      width: 85%;
      justify-content: center;
      align-items: center;
      margin: ${theme.spacings.medium} auto;
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
  `}
`;

export const ContentWrapper = styled.div`
  ${({ theme }) => css`
    width: 55%;
    a {
      text-decoration: none;
      color: ${theme.colors.navy};
      transition: ${theme.transitions.faster};
      &:hover {
        color: ${theme.colors.thirdColor};
      }
    }

    @media ${theme.media.lteMedium} {
      width: 100%;
      padding: ${theme.spacings.medium};
    }
  `}
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 45%;
`;

export const ButtonContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    margin-top: 2rem;
    margin-right: 2rem;

    ${Btn} {
      min-width: 48%;

      margin: 0rem;
      margin-right: 1rem;
      border: 2px solid ${theme.colors.teal};
      background: ${theme.colors.footerWhite};
      color: ${theme.colors.teal};

      &:hover {
        border: 2px solid ${theme.colors.thirdColor};
        background: ${theme.colors.footerWhite};
        color: ${theme.colors.thirdColor};
      }

      &::after {
        content: none;
      }

      :nth-of-type(2) {
        background: ${theme.colors.teal};
        color: ${theme.colors.footerWhite};

        &:hover {
          border: 2px solid ${theme.colors.teal};
          background: ${theme.colors.hoverTeal};
        }
      }
    }

    @media ${theme.media.lteMedium} {
      flex-direction: column;
      margin-right: 0rem;

      ${Btn} {
        width: 100%;
        margin: ${theme.spacings.tiny} 0;
      }
    }
  `}
`;
