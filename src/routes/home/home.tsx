import React from 'react';
import { Container, StyledLink } from '../../components';
import { HomeContent } from './home.styles';
import { useSelector, RootStateOrAny } from 'react-redux';

const Home: React.FC = (): JSX.Element => {
  const { firstName, lastName, email } = useSelector(
    (state: RootStateOrAny) => state.user.value
  );

  return (
    <Container>
      <HomeContent>
        <h2>iomoto frontend challenge</h2>
        <StyledLink to='/countries'>Country List</StyledLink>
        <p>
          by{' '}
          <a href={`mailto:${email}`}>
            {firstName} {lastName}
          </a>
        </p>
      </HomeContent>
    </Container>
  );
};

export default Home;
