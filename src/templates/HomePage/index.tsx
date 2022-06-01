import { Menu } from '../../components/Menu';
import { ToggleTheme } from '../../components/ToggleTheme';
import * as Styled from './styles';

export const HomePage = () => {
  return (
    <Styled.Wrapper>
      <ToggleTheme />
      <Menu />
    </Styled.Wrapper>
  );
};
