import { useState } from 'react';
import { ProfileLinkProps } from '../../shared-types/shared-types';
import { formatDate } from '../../utils/format-date';
import { Button } from '../Button';
import { Heading } from '../Heading';
import * as Styled from './styles';

export const ProfileLink = ({
  address,
  createdAt,
  email,
  phone,
  username,
  onSubmit,
}: ProfileLinkProps) => {
  const [changeUsername, setChangeUsername] = useState(username);
  const [changeEmail, setChangeEmail] = useState(email);
  const [changeTelephone, setChangeTelephone] = useState(phone);
  const [changeAddress, setChangeAddress] = useState(address);
  const [loading, setLoading] = useState(false);

  const handleUsername = (value) => {
    setChangeUsername(value);
  };

  const handleEmail = (value) => {
    setChangeEmail(value);
  };

  const handleTelephone = (value) => {
    setChangeTelephone(value);
  };

  const handleAddress = (value) => {
    setChangeAddress(value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    setLoading(true);
    event.preventDefault();

    if (onSubmit) {
      await onSubmit(
        changeUsername,
        changeEmail,
        changeTelephone,
        changeAddress,
      );
    }
    setLoading(false);
  };

  return (
    <Styled.Wrapper>
      <Heading size="medium">My Profile</Heading>
      <Styled.Input>
        <label>Username: </label>
        <input value={changeUsername} onChange={(v) => handleUsername(v)} />
      </Styled.Input>
      <Styled.Input>
        <label>Email: </label>
        <input value={changeEmail} onChange={(v) => handleEmail(v)} />
      </Styled.Input>
      <Styled.Input>
        <label>Telephone: </label>
        <input value={changeTelephone} onChange={(v) => handleTelephone(v)} />
      </Styled.Input>
      <Styled.Input>
        <label>Address: </label>
        <input value={changeAddress} onChange={(v) => handleAddress(v)} />
      </Styled.Input>
      <Button disabled={loading}>Save Changes</Button>
      <p>Created at: {formatDate(createdAt)}</p>
    </Styled.Wrapper>
  );
};
