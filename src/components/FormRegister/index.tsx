import React, { useState } from 'react';
import { FormRegisterProps } from '../../shared-types/shared-types';
import { TextInput } from '../TextInput';
import { Person } from '@styled-icons/material-outlined/Person';
import { Email } from '@styled-icons/material-outlined/Email';
import { Password } from '@styled-icons/material-outlined/Password';
import { Phone } from '@styled-icons/material-outlined/Phone';
import { House } from '@styled-icons/material-outlined/House';
import * as Styled from './styles';
import { Button } from '../Button';

export const FormRegister = ({
  errorMessage,
  onRegister,
}: FormRegisterProps) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [telephone, setTelephone] = useState('');
  const [address, setAddress] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    setLoading(true);
    event.preventDefault();
    /* istanbul ignore else */
    if (onRegister) {
      await onRegister(
        username,
        email,
        password,
        confirmPassword,
        telephone,
        address,
      );
    }
    setLoading(false);
  };

  return (
    <Styled.Wrapper onSubmit={handleSubmit}>
      <TextInput
        name="user-username"
        label="Username"
        onInputChange={(val) => setUsername(val)}
        value={username}
        icon={<Person />}
        type="text"
        errorMessage={errorMessage ? ' ' : null}
      />
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
        errorMessage={errorMessage ? ' ' : null}
      />
      <TextInput
        name="user-confirm-password"
        label="Confirm Password"
        onInputChange={(val) => setConfirmPassword(val)}
        value={confirmPassword}
        icon={<Password />}
        type="password"
        errorMessage={errorMessage ? ' ' : null}
      />
      <TextInput
        name="user-telephone"
        label="Telephone"
        onInputChange={(val) => setTelephone(val)}
        value={telephone}
        icon={<Phone />}
        type="tel"
        errorMessage={errorMessage ? ' ' : null}
      />
      <TextInput
        name="user-address"
        label="Address"
        onInputChange={(val) => setAddress(val)}
        value={address}
        icon={<House />}
        type="text"
        errorMessage={errorMessage}
      />
      <Styled.ButtonWrapper>
        <Button disabled={loading}>{loading ? 'Loading' : 'Register'}</Button>
      </Styled.ButtonWrapper>
    </Styled.Wrapper>
  );
};
