import React from 'react';
import InputProps from '../interfaces/props/Input.props';
import { StyledInput } from './styles/Input.style';

export const Input: React.FC<InputProps> = ({
  placeholder,
  onChange,
}): JSX.Element => {
  return (
    <StyledInput type='text' placeholder={placeholder} onChange={onChange} />
  );
};
