import React from 'react';
import { StyledLink } from '.';
import StyledProps from '../interfaces/props/Styled.props';
import { Container } from './styles/Container';
import Logo from '../assets/images/logo.svg';
import { StyledHeader } from './styles/Header.style';

export const Header: React.FC<StyledProps> = (): JSX.Element => {
  return (
    <StyledHeader>
      <Container
        style={{ justifyContent: 'space-between', alignItems: 'center' }}
      >
        <StyledLink to='/'>
          <img src={Logo} alt='iomoto.io' />
        </StyledLink>
        <p>Frontend Challenge</p>
      </Container>
    </StyledHeader>
  );
};
