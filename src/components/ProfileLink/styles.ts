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

    p {
      position: absolute;
      bottom: 0.5rem;
      left: 2rem;
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
    }
  `}
`;

export const Input = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxsmall} 0;
    position: relative;
    margin-bottom: ${theme.spacings.small};
    height: 4rem;
    width: 100%;
    input {
      /* height: 3rem; */
      width: 40rem;
      font-size: ${theme.font.sizes.normal};
      padding: ${theme.spacings.xxsmall} 0.5rem;
      position: absolute;
      right: 1.2rem;
      border-radius: ${theme.spacings.tiny};
      border: 1px solid ${theme.colors.gray3};
      background: ${theme.colors.footerWhite};
      transition: ${theme.transitions.fast};
      outline: none;

      &:focus {
        border: ${theme.spacings.xxtiny} solid ${theme.colors.teal};
        box-shadow: 0 0 ${theme.spacings.xtiny} 0 ${theme.colors.teal};
        background: ${theme.colors.footerWhite};
      }
    }

    label {
      position: absolute;
      top: 1.7rem;
    }
  `}
`;
