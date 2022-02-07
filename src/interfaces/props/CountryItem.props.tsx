import StyledProps from './Styled.props';
import { ICountry } from '../Country';

export default interface CountryItemProps extends StyledProps {
  country: ICountry;
}
