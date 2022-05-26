import * as Styled from './styles';

export type MenuLinkProps = {
  children: React.ReactNode;
  link: string;
};

export const MenuLink = ({ children, link }: MenuLinkProps) => {
  return <Styled.Container href={link}>{children}</Styled.Container>;
};
