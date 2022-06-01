import styled, { css } from 'styled-components';

export const Container = styled.nav`
  ${({ theme }) => css`
    display: flex;
    flex-flow: row wrap;
    margin-right: ${theme.spacings.large};
    padding: 5px 0;

    @media ${theme.media.lteMedium} {
      flex-flow: column wrap;
      align-content: center;
    }

    a {
      text-decoration: none;
      padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
      background: inherit;
      color: ${theme.colors.teal};
      /* border: 0.5px solid ${theme.colors.teal}; */
      border: none;
      font-size: ${theme.font.sizes.ltmedium};
      font-weight: 500;
      margin-left: ${theme.spacings.xxsmall};
      margin-top: 5px;
      margin-bottom: 4px;
      position: relative;
      transition: all 300ms ease-in-out;

      &:disabled {
        background: ${theme.colors.mediumGrey};
        color: ${theme.colors.white};
        border: 2px solid ${theme.colors.mediumGrey};
        transition: none;

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
      &:hover {
        color: ${theme.colors.thirdColor};
        cursor: pointer;
      }

      &::after {
        content: '';
        position: absolute;
        bottom: 0.2rem;
        left: 50%;
        width: 0;
        height: 0.2rem;
        background: ${theme.colors.thirdColor};
        transition: all 200ms ease-in-out;
      }

      &:hover::after {
        left: 25%;
        width: 50%;
      }
    }
  `}
`;

export const SvgContainer = styled.div`
  ${({ theme }) => css`
    position: relative;
    margin-top: 10px;
    margin-left: ${theme.spacings.medium};
    transition: all 300ms ease-in-out;
    svg {
      height: 30px;
      transition: all 300ms ease-in-out;

      &:hover {
        color: ${theme.colors.thirdColor};
        cursor: pointer;
      }
    }
    &::after {
      content: '';
      position: absolute;
      bottom: 0.2rem;
      left: 50%;
      width: 0;
      height: 0.2rem;
      background: ${theme.colors.thirdColor};
      transition: all 200ms ease-in-out;
    }

    &:hover::after {
      left: 25%;
      width: 50%;
    }
  `}
`;
