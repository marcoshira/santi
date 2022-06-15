import React, { useState } from 'react';
import { FormLoginProps } from '../../shared-types/shared-types';
import { TextInput } from '../TextInput';
import { Email } from '@styled-icons/material-outlined/Email';
import { Password } from '@styled-icons/material-outlined/Password';
import * as Styled from './styles';
import { Button } from '../Button';

export const FormLogin = ({ errorMessage, onLogin }: FormLoginProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    setLoading(true);
    event.preventDefault();
    /* istanbul ignore else */
    if (onLogin) {
      await onLogin(email, password);
    }
    setLoading(false);
  };

  return (
    <Styled.Wrapper onSubmit={handleSubmit}>
      <TextInput
        name="user-identifier"
        label="Email"
        onInputChange={(val) => setEmail(val)}
        value={email}
        icon={<Email />}
        type="email"
        errorMessage={errorMessage ? ' ' : null}
      />
      <TextInput
        name="user-password"
        label="Password"
        onInputChange={(val) => setPassword(val)}
        value={password}
        icon={<Password />}
        type="password"
        errorMessage={errorMessage}
      />
      <Styled.ButtonWrapper>
        <Button disabled={loading}>{loading ? 'Logging In' : 'Log In'}</Button>
      </Styled.ButtonWrapper>
    </Styled.Wrapper>
  );
};
