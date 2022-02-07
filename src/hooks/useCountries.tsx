import { useState, useEffect, useCallback } from 'react';
import { getAllCountries, searchCountries } from '../services/Countries';
import { ICountry } from '../interfaces/Country';

const useCountries = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [searchName, setSearchName] = useState<string>('');
  //   const [searchCode, setSearchCode] = useState<string>('');

  const updateName = (e: any) => {
    setSearchName(e.target.value);
  };

  const updateCode = (e: any) => {
    //setSearchCode(e.target.value);
  };

  const getCountries = useCallback(() => {
    if (searchName === '') {
      getAllCountries()
        .then((res) => setCountries(res))
        .catch((err) => {})
        .finally(() => setIsLoading(false));
    } else {
      searchCountries(searchName)
        .then((res) => {
          if (Array.isArray(res)) setCountries(res);
        })
        .catch((err) => {})
        .finally(() => setIsLoading(false));
    }
  }, [searchName]);

  useEffect(() => {
    setCountries([]);
    setIsLoading(true);
    const timeout: NodeJS.Timeout = setTimeout(() => {
      getCountries();
    }, 300);

    return () => clearTimeout(timeout);
  }, [searchName, getCountries]);

  return { isLoading, countries, updateName, updateCode };
};

export default useCountries;
