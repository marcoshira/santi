import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { FormLogin } from '../components/FormLogin';
import { Wrapper } from '../components/Wrapper';
import { HomePage } from '../templates/HomePage';

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState('');

  const handleLogin = async (identifier: string, password: string) => {
    const response = await signIn('credentials', {
      identifier,
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
        <FormLogin onLogin={handleLogin} />
      </Wrapper>
    </>
  );
}
