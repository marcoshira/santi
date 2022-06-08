import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';
import { ProfileComponent } from '../components/ProfileComponent';
import { gqlClient } from '../graphql/client';
import { StrapiSession } from '../templates/Home';
import { HomePage } from '../templates/HomePage';
import { GQL_GET_USER_BY_ID } from '../graphql/queries/user';
import { UserPermissionProps } from '../shared-types/shared-types';
import Head from 'next/head';

export type ProfilePageProps = {
  user: UserPermissionProps;
};

export default function ProfilePage({ user }: ProfilePageProps) {
  const profileName = user.data.attributes.username;
  return (
    <>
      <Head>
        <title>{profileName} | Santi</title>
      </Head>
      <HomePage />
      <ProfileComponent {...user.data.attributes} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getSession(ctx);
  const newSession = session as StrapiSession;
  let redirect = 'profile' as string;
  if (ctx.query && ctx.query.id) {
    redirect = ctx.query.id as string;
    console.log(redirect);
  }
  try {
    const { usersPermissionsUser } = await gqlClient.request(
      GQL_GET_USER_BY_ID,
      { userID: newSession.user.user.id },
      { Authorization: `Bearer ${newSession.user.jwt}` },
    );
    usersPermissionsUser.data.attributes.redirect = redirect;
    console.log(usersPermissionsUser.data.attributes.redirect);
    return {
      props: {
        user: usersPermissionsUser,
      },
    };
  } catch (e) {
    console.log(e);
    return null;
  }
};
