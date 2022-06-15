import * as Styled from './styles';
import { LogoLink } from '../LogoLink';
import { NavLinks } from '../NavLinks';

export const Menu = () => {
  return (
    <Styled.Container>
      <Styled.MenuContainer>
        <LogoLink />
        <NavLinks />
      </Styled.MenuContainer>
    </Styled.Container>
  );
};
