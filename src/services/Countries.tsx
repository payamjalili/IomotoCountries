import { API } from '../constants';
import { ICountry } from '../interfaces/Country';

export const getAllCountries = async (): Promise<ICountry[]> => {
  let response = await API.get<ICountry[]>('/all');

  return response.data;
};

export const searchCountries = async (name: string): Promise<ICountry[]> => {
  let response = await API.get<ICountry[]>(`/name/${name}`);

  return response.data;
};

export const getCountry = async (code: string): Promise<ICountry> => {
  let response = await API.get<ICountry>(`/alpha/${code}`);

  return response.data;
};
