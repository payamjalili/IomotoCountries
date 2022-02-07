import styled from 'styled-components';
import { BoxShadow } from '../index';

export const StyledCountryItem = styled.div`
  min-width: 100%;
  width: 100%;
  background-color: #f9f9f9;
  margin-bottom: 40px;
  height: 350px;
  border-radius: 5px;
  overflow: hidden;
  border: 1px solid #fff;
  ${BoxShadow()}

  & h3 {
    font-size: 16px;
    margin-bottom: 10px;
    height: 45px;
    overflow: hidden;
  }

  & > div {
    padding: ${(props) => props.theme.spaces};
    font-size: 13px;

    & span {
      font-weight: 800;
    }
  }

  @media (min-width: ${({ theme }) => theme.desktop}) {
    min-width: 22%;
    width: 22%;
  }
`;
