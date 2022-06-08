import styled, { css } from 'styled-components';
import { Wrapper as Btn } from '../Button/styles';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: calc(100% - 27rem);
    background: ${theme.colors.background2};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 12rem;
    margin-left: 27rem;
  `}
`;

export const ContentWrapper = styled.div`
  ${({ theme }) => css`
    width: 85%;
    border-radius: 10px;
    box-shadow: 3px 3px 15px ${theme.colors.teal};
    background: ${theme.colors.footerWhite};
    display: flex;
    justify-content: space-between;
    flex-direction: row;
  `}
`;

export const ImageWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    /* width: 50%; */
    border-radius: 10px;
    height: 35rem;

    img {
      border-radius: 10px;
      height: 28rem;
    }
  `}
`;

export const TextWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 50%;
    justify-content: left;
    flex-flow: column nowrap;
    color: ${theme.colors.navy};
    margin-top: 2rem;
    position: relative;

    svg {
      height: 3rem;
      position: absolute;
      top: 0;
      right: 2rem;
      color: ${theme.colors.teal};
      cursor: pointer;
      transition: ${theme.transitions.fast};

      &:hover {
        color: ${theme.colors.hoverTeal};
      }
    }

    p {
      margin: 0 0 0 ${theme.spacings.medium};
      padding-bottom: 2rem;
      font-size: 1.7rem;
    }

    #title {
      font-size: 2.5rem;
      padding-bottom: 1rem;
    }

    #price {
      font-size: 3rem;
      font-weight: bold;
      padding-top: 1.5rem;
      padding-bottom: 0rem;
      margin-top: 2.5rem;
    }

    a {
      color: ${theme.colors.navy};
      transition: all 300ms ease-in-out;
      font-size: 1.8rem;

      &:hover {
        color: ${theme.colors.thirdColor};
      }
    }
  `}
`;

export const DescWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 85%;
    padding: 10px;
    margin-top: 1rem;
    line-height: 1.3;
    font-size: 1.8rem;
    color: ${theme.colors.darkGrey};

    a {
      cursor: pointer;
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

    label {
      margin: 8px ${theme.spacings.ltlarge} 0;
      color: ${theme.colors.darkGrey};
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

export const ButtonContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    position: absolute;
    bottom: 3rem;
    width: 98%;
    ${Btn} {
      min-width: 23rem;
      border: 2px solid ${theme.colors.teal};

      &:hover {
        border: 2px solid ${theme.colors.thirdColor};
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
