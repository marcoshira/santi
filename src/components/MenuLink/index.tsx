import * as Styled from './styles';

export type MenuLinkProps = {
  children: React.ReactNode;
  link?: string;
  onClick?: () => void;
};

export const MenuLink = ({ children, link, onClick }: MenuLinkProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <Styled.Container onClick={handleClick} href={link}>
      {children}
    </Styled.Container>
  );
};
