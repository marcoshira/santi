import { useState } from 'react';
import { ProfileLinkProps } from '../../shared-types/shared-types';
import { formatDate } from '../../utils/format-date';
import { Button } from '../Button';
import { Heading } from '../Heading';
import { TextInput } from '../TextInput';
import * as Styled from './styles';

export const ProfileLink = ({
  address,
  createdAt,
  phone,
  username,
  errorMessage,
  onSubmit,
}: ProfileLinkProps) => {
  const [changeUsername, setChangeUsername] = useState(username);
  const [changeTelephone, setChangeTelephone] = useState(phone);
  const [changeAddress, setChangeAddress] = useState(address);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    setLoading(true);
    event.preventDefault();
    /* istanbul ignore else */
    if (onSubmit) {
      await onSubmit(changeUsername, changeTelephone, changeAddress);
    }
    setLoading(false);
  };

  return (
    <Styled.Wrapper onSubmit={handleSubmit}>
      <Heading size="medium">My Profile</Heading>
      <TextInput
        name="user-username"
        label="Username"
        onInputChange={(val) => setChangeUsername(val)}
        value={changeUsername}
        type="text"
        errorMessage={errorMessage ? ' ' : null}
      />
      <TextInput
        name="user-phone"
        label="Telephone"
        onInputChange={(val) => setChangeTelephone(val)}
        value={changeTelephone}
        type="tel"
        errorMessage={errorMessage ? ' ' : null}
      />
      <TextInput
        name="user-address"
        label="Address"
        onInputChange={(val) => setChangeAddress(val)}
        value={changeAddress}
        type="text"
        errorMessage={errorMessage}
      />
      <Button disabled={loading}>{loading ? 'Saving' : 'Save Changes'}</Button>
      <p>Created at: {formatDate(createdAt)}</p>
    </Styled.Wrapper>
  );
};
