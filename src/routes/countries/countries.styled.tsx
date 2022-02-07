import styled from 'styled-components';

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    display: block;
  }
`;

const CountryList = styled.div`
  flex: 1;
`;

const CountryHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;

  @media (min-width: ${({ theme }) => theme.desktop}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export { Content, CountryList, CountryHeader };
