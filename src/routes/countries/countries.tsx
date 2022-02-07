import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ICountry } from '../../interfaces/Country';
import { Content, CountryHeader, CountryList } from './countries.styled';
import { Container, Center, CountryItem, Input } from '../../components';
import useCountries from '../../hooks/useCountries';

const Countries: React.FC = (): JSX.Element => {
  const { isLoading, countries, updateName, updateCode } = useCountries();

  return (
    <Container>
      <CountryList>
        <CountryHeader>
          <Input placeholder='Search country by name' onChange={updateName} />
          <Input
            placeholder='Search country by alpha code'
            onChange={updateCode}
          />
        </CountryHeader>
        {isLoading && (
          <Center>
            <FontAwesomeIcon icon={faSpinner} spin={true} />
          </Center>
        )}
        {!isLoading && countries.length === 0 && (
          <Center>No Country was found.</Center>
        )}
        {!isLoading && countries.length !== 0 && (
          <Content>
            {countries.map((country: ICountry) => (
              <CountryItem
                key={`country-${country.name.official}`}
                country={country}
              />
            ))}
          </Content>
        )}
      </CountryList>
    </Container>
  );
};

export default Countries;
