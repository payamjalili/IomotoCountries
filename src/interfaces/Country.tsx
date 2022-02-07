export interface ICountry {
  name: ICountryName;
  flags: {
    svg: string;
    png: string;
  };
  region: string;
  capital: string[];
  population: number;
  subregion: string;
  cioc: string;
}

interface ICountryName {
  common: string;
  official: string;
}
