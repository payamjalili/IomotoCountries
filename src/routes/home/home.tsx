import React from 'react';
import { Container, StyledLink } from '../../components';
import { HomeContent } from './home.styles';

const Home: React.FC = (): JSX.Element => {
  return (
    <Container>
      <HomeContent>
        <h2>iomoto frontend challenge</h2>
        <StyledLink to='/countries'>Country List</StyledLink>
        <p>
          by <a href='mailto:payam.jalilii@gmail.com'>Payam Jalili</a>
        </p>
      </HomeContent>
    </Container>
  );
};

export default Home;
