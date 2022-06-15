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
      min-height: 53rem;
      width: 85%;
      justify-content: center;
      align-items: center;
      margin: ${theme.spacings.medium} auto;
      padding-bottom: 0;
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
    svg {
      height: 3rem;
      position: absolute;
      top: 2rem;
      right: 2rem;
      color: ${theme.colors.teal};
      cursor: pointer;
      transition: ${theme.transitions.fast};

      &:hover {
        color: ${theme.colors.hoverTeal};
      }
    }

    @media ${theme.media.lteMedium} {
      width: 100%;
      padding: ${theme.spacings.medium};
    }
  `}
`;

export const ImageWrapper = styled.div`
  ${({ theme }) => css`
    width: 45%;
    display: flex;
    justify-content: center;

    img {
    }
  `}
`;

export const ButtonContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    margin-top: 3rem;
    ${Btn} {
      min-width: 47%;

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

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 50%;
    justify-content: left;
    flex-flow: row nowrap;
    font-size: 1.6rem;
    margin-top: 3rem;

    @media ${theme.media.lteMedium} {
      width: 100%;
      margin-top: 1rem;
    }

    label {
      margin: 8px ${theme.spacings.ltlarge} 0 0;
      color: ${theme.colors.darkGrey};

      @media ${theme.media.lteMedium} {
        margin: 7px ${theme.spacings.hero} 0 0;
      }
    }

    input {
      width: 40px;
      display: flex;
      text-align: center;
      align-items: center;
      justify-content: center;
      border: 1px solid ${theme.colors.grey};
      height: 35px;
    }
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css`
    padding: 0 10px;
    background: ${theme.colors.footerWhite};
    border: 1px solid ${theme.colors.grey};
  `}
`;
