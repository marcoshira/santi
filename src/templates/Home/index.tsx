import { useSession } from 'next-auth/react';
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

export function Home() {
  const { data: session } = useSession();
  const newSession = session as StrapiSession;

  return (
    <Styled.Wrapper>
      <span>
        {session ? <h1>Oi {newSession.user.user.username}</h1> : <h1>Oi</h1>}
      </span>
    </Styled.Wrapper>
  );
}
