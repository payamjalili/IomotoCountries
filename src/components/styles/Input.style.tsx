import styled from 'styled-components';

export const StyledInput = styled.input`
  border: 1px solid #f3f3f3;
  padding: 10px 20px;
  border-radius: 5px;
  margin-bottom: 15px;
  width: 100%;
  background: #fdfdfd;
  outline: none;

  &::placeholder {
    color: #a7a7a7;
  }

  &:focus {
    border-color: #ccc;
  }

  @media (min-width: ${({ theme }) => theme.desktop}) {
    width: 48% !important;
  }
`;
