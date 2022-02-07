import styled from 'styled-components';

export const Container = styled.div`
  max-width: 370px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spaces};
  color: ${({ theme }) => theme.colors.primary};
  display: flex;

  @media (min-width: ${({ theme }) => theme.desktop}) {
    max-width: 1366px;
  }
`;
