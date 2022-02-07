import styled from 'styled-components';

export const HomeContent = styled.div`
  text-align: center;
  width: 100%;

  h2 {
    margin-bottom: 50px;
    color: ${({ theme }) => theme.colors.primary};
  }

  & > a {
    font-size: 16px;
    font-weight: bold;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.secondary};
    padding: 15px 20px;
    border-radius: 50px;
  }

  p {
    margin-top: 100px;
    a {
      text-decoration: none;
    }
  }
`;
