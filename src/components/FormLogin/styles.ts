import styled, { css } from 'styled-components';
import { Wrapper as Button } from '../Button/styles';

export const Wrapper = styled.form`
  ${({ theme }) => css``}
`;

export const ButtonWrapper = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    ${Button} {
      a {
        text-decoration: none;
        color: ${theme.colors.footerWhite};
      }
      width: 15rem;
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

export const ErrorMessage = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.thirdColor};
    font-size: ${theme.font.sizes.normal};
    margin-top: ${theme.spacings.small};
  `}
`;
