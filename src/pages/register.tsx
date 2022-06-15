import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { FormRegister } from '../components/FormRegister';
import { RegWrapper } from '../components/RegWrapper';
import { gqlClient } from '../graphql/client';
import { GQL_CREATE_CART } from '../graphql/mutations/cart';
import { GQL_CREATE_FAVORITE } from '../graphql/mutations/favorite';
import { GQL_CREATE_PURCHASE } from '../graphql/mutations/purchase';
import { GQL_REGISTER_USER, GQL_UPDATE_USER } from '../graphql/mutations/user';
import { HomePage } from '../templates/HomePage';

export default function RegisterPage() {
  const router = useRouter();
  const [error, setError] = useState('');

  const handleRegister = async (
    username: string,
    email: string,
    password: string,
    confirmPassword: string,
    telephone: string,
    address: string,
  ) => {
    if (!(password === confirmPassword)) {
      setError('Senhas não correspondem');
      return;
    }

    try {
      const newUser = await gqlClient.request(
        GQL_REGISTER_USER,
        { username: username, email: email, password: password },
        {},
      );
      await gqlClient.request(
        GQL_UPDATE_USER,
        {
          userID: newUser.register.user.id,
          address: address,
          phone: telephone,
        },
        { Authorization: `Bearer ${newUser.register.jwt}` },
      );
      await gqlClient.request(
        GQL_CREATE_CART,
        {
          userID: newUser.register.user.id,
        },
        { Authorization: `Bearer ${newUser.register.jwt}` },
      );
      await gqlClient.request(
        GQL_CREATE_FAVORITE,
        {
          userID: newUser.register.user.id,
        },
        { Authorization: `Bearer ${newUser.register.jwt}` },
      );
      await gqlClient.request(
        GQL_CREATE_PURCHASE,
        {
          userID: newUser.register.user.id,
        },
        { Authorization: `Bearer ${newUser.register.jwt}` },
      );
    } catch (e) {
      return null;
    }
    const response = await signIn('credentials', {
      identifier: email,
      password,
      redirect: false,
    });

    if (!response.ok) {
      setError('Usuário ou senha inválidos');
      return;
    }

    const redirect = router.query?.redirect || '/';
    router.push(redirect as string);
  };

  return (
    <>
      <HomePage />
      <RegWrapper>
        <FormRegister onRegister={handleRegister} errorMessage={error} />
      </RegWrapper>
    </>
  );
}
