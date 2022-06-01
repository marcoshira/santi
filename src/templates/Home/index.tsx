// import { useSession } from 'next-auth/react';
import { Base, BaseProps } from '../Base';
import * as Styled from './styles';

export type StrapiSession = {
  expires: string;
  user: UserObj;
};

export type UserObj = {
  jwt: string;
  user: User;
};

export type User = {
  id: number;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: string;
  updatedAt: string;
};

export type HomeProps = BaseProps;

export function Home({ data, types }: HomeProps) {
  // const { data: session } = useSession();
  // const newSession = session as StrapiSession;

  return (
    <Styled.Wrapper>
      <Base data={data} types={types} />
    </Styled.Wrapper>
  );
}
