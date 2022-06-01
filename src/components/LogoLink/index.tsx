import * as Styled from './styles';
import { Heading } from '../Heading';

export const LogoLink = () => {
  return (
    <Heading size="small" uppercase>
      <Styled.Container href="/" target="_self">
        Santi
      </Styled.Container>
    </Heading>
  );
};
