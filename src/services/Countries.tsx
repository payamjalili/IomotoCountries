import { API } from '../constants';
import { ICountry } from '../interfaces/Country';

export const getAllCountries = async (
  name: string,
  code: string
): Promise<ICountry[]> => {
  let result: ICountry[] = [];
  let resultName: ICountry[] = [];
  let resultCode: ICountry[] = [];

  if (name === '' && code === '') {
    let response = await API.get<ICountry[]>('/all');
    result = response.data;
  }

  if (name !== '') {
    let response = await API.get<ICountry[]>(`/name/${name}`);
    resultName = response.data;
  }
  if (code !== '') {
    let response = await API.get<ICountry[]>(`/alpha/${code}`);
    resultCode = response.data;
  }

  if (resultName.length > 0 && resultCode.length === 0) {
    result = resultName;
  } else if (resultName.length === 0 && resultCode.length > 0) {
    result = resultCode;
  } else if (resultName.length > 0 && resultCode.length > 0) {
    result = resultName.filter(
      (n) => resultCode.filter((c) => n.cioc === c.cioc).length > 0
    );
  }

  return result;
};
