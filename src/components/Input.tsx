import React from 'react';
import InputProps from '../interfaces/props/Input.props';
import { StyledInput } from './styles/Input.style';

export const Input: React.FC<InputProps> = ({
  placeholder,
  onChange,
  value,
}): JSX.Element => {
  return (
    <StyledInput
      type='text'
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};
