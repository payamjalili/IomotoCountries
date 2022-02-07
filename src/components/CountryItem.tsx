import React from 'react';
import CountryItemProps from '../interfaces/props/CountryItem.props';
import { StyledCountryItem } from './styles/CountryItem.style';

export const CountryItem: React.FC<CountryItemProps> = ({
  country,
}): JSX.Element => {
  return (
    <StyledCountryItem>
      <img src={country.flags.svg} alt='{country.name.official}' />
      <div className='countryInfo'>
        <h3>{country.name.official}</h3>
        <div>
          <span>Population:</span> {country.population.toLocaleString()}
        </div>
        <div>
          <span>Region:</span> {country.region}
        </div>
        {country.capital && country.capital.length > 0 && (
          <div>
            <span>Capital:</span> {country.capital.join(', ')}
          </div>
        )}
      </div>
    </StyledCountryItem>
  );
};
