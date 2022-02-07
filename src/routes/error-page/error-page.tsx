import { StyledLink, StyledTitle } from '../../components';
import { ErrorContainer } from './error-page.styles';

function ErrorPage() {
  return (
    <ErrorContainer>
      <StyledTitle>Error!</StyledTitle>
      <p>Page not Found!</p>
      <StyledLink to='/'>Back to Home</StyledLink>
    </ErrorContainer>
  );
}

export default ErrorPage;
