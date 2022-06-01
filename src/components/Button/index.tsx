import { ButtonProps } from '../../shared-types/shared-types';
import * as Styled from './styles';

export const Button = ({
  children,
  disabled = false,
  onClick = null,
}: ButtonProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <Styled.Wrapper disabled={disabled} onClick={handleClick}>
      {children}
    </Styled.Wrapper>
  );
};
