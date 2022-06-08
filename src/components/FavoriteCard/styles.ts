import styled, { css } from 'styled-components';
import { Wrapper as Btn } from '../Button/styles';
import { Title } from '../Heading/styles';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    width: 65%;
    box-shadow: 3px 3px 15px ${theme.colors.teal};
    border-radius: 15px;
    color: ${theme.colors.navy};
    background: ${theme.colors.footerWhite};
    position: relative;
    padding: ${theme.spacings.small} 0;
    margin-bottom: ${theme.spacings.ltmedium};

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
      top: 1.8rem;
      right: 2rem;
      color: ${theme.colors.teal};
      cursor: pointer;
      transition: ${theme.transitions.fast};

      &:hover {
        color: ${theme.colors.hoverTeal};
      }
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
    margin-top: 7rem;
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
  `}
`;