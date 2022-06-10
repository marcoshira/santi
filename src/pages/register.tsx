import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { FormRegister } from '../components/FormRegister';
import { Wrapper } from '../components/Wrapper';
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
      return null;
    }

    try {
      const newUser = await gqlClient.request(
        GQL_REGISTER_USER,
        { username: username, email: email, password: password },
        {},
      );
      const updatedUser = await gqlClient.request(
        GQL_UPDATE_USER,
        {
          userID: newUser.register.user.id,
          address: address,
          phone: telephone,
        },
        { Authorization: `Bearer ${newUser.register.jwt}` },
      );
      const cart = await gqlClient.request(
        GQL_CREATE_CART,
        {
          userID: newUser.register.user.id,
        },
        { Authorization: `Bearer ${newUser.register.jwt}` },
      );
      const favorites = await gqlClient.request(
        GQL_CREATE_FAVORITE,
        {
          userID: newUser.register.user.id,
        },
        { Authorization: `Bearer ${newUser.register.jwt}` },
      );
      const purchases = await gqlClient.request(
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
      <Wrapper>
        <FormRegister onRegister={handleRegister} />
      </Wrapper>
    </>
  );
}
