import StyledProps from './Styled.props';

export default interface InputProps extends StyledProps {
  placeholder?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
}
