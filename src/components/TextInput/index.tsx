import React, { useRef } from 'react';
import { TextInputProps } from '../../shared-types/shared-types';
import * as Styled from './styles';

export const TextInput = ({
  type = 'text',
  label,
  name,
  disabled = false,
  onInputChange,
  errorMessage = '',
  value = '',
  icon = '',
  reference = null,
}: TextInputProps) => {
  const inputRef = useRef(reference);

  const handleChange = () => {
    const value = inputRef.current.value;
    /* istanbul ignore else */
    if (onInputChange) {
      onInputChange(value);
    }
  };

  return (
    <Styled.Wrapper>
      <Styled.InputWrapper errorMessage={errorMessage}>
        <Styled.Input
          type={type}
          name={name}
          id={name}
          disabled={disabled}
          ref={inputRef}
          onChange={handleChange}
          placeholder={label}
          errorMessage={errorMessage}
          defaultValue={value}
        />
        <Styled.Label htmlFor={name} element="input">
          {label}
        </Styled.Label>
        {!!icon && icon}
      </Styled.InputWrapper>

      {!!errorMessage && (
        <Styled.ErrorMessage>{errorMessage}</Styled.ErrorMessage>
      )}
    </Styled.Wrapper>
  );
};
