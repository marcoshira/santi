import styled, { css } from 'styled-components';

type ToggleThemeSunAndMoonProps = {
  defaultChecked: boolean;
};

const iconChanger = (defaultChecked: boolean) => css`
  right: ${defaultChecked ? '2.5rem' : '0.3rem'};
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: fixed;
    top: 8rem;
    right: 2rem;
    z-index: 6;

    @media ${theme.media.lteSmall} {
      right: 3.5rem;
    }
  `}
`;

export const Label = styled.label`
  position: relative;
  display: inline-block;
  width: 5rem;
  height: 2.5rem;
  line-height: 0;
  font-size: 0;
  overflow: hidden;
  color: rgba(0, 0, 0, 0);
`;

export const IconContainer = styled.div<ToggleThemeSunAndMoonProps>`
  ${({ theme, defaultChecked }) => css`
    color: ${theme.colors.yellow};
    ${iconChanger(defaultChecked)}
    bottom: 0.2rem;
    position: absolute;
    svg {
      height: 22px;
    }
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    appearance: none;
    opacity: 0;
    width: 0;
    height: 0;

    &:checked + ${Slider} {
      background: ${theme.colors.black};
    }

    &:checked + ${Slider}:before {
      transform: translateX(2.4rem);
    }
  `}
`;

export const Slider = styled.span`
  ${({ theme }) => css`
    position: absolute;
    cursor: pointer;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: ${theme.colors.black};
    transition: all 300ms ease-in-out;
    border-radius: 2rem;

    &:before {
      content: '';
      position: absolute;
      width: 2rem;
      height: 2rem;
      bottom: 0.25rem;
      left: 0.32rem;
      background: ${theme.colors.background};
      border-radius: 50%;
      transition: all 300ms ease-in-out;
    }
  `}
`;
