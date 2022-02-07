import { useState, useEffect, useCallback } from 'react';
import { getAllCountries } from '../services/Countries';
import { ICountry } from '../interfaces/Country';

const useCountries = () => {
  const PAGE_SIZE = 12;

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [pageNum, setPageNum] = useState<number>(1);
  const [allCountries, setAllCountries] = useState<ICountry[]>([]);
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [searchName, setSearchName] = useState<string>('');
  const [searchCode, setSearchCode] = useState<string>('');

  const updateName = (e: any) => {
    setSearchName(e.target.value);
  };

  const updateCode = (e: any) => {
    setSearchCode(e.target.value);
  };

  const loadMore = () => {
    setPageNum((prev) => prev + 1);
  };

  const getCountries = useCallback(() => {
    getAllCountries(searchName, searchCode)
      .then((res) => {
        setAllCountries(res);
      })
      .catch((err) => {})
      .finally(() => setIsLoading(false));
  }, [searchName, searchCode]);

  useEffect(() => {
    setCountries(allCountries.slice(0, PAGE_SIZE));
    setPageNum(1);
    setHasMore(true);
  }, [allCountries]);

  useEffect(() => {
    setCountries([]);
    setPageNum(1);
    setIsLoading(true);
    const timeout: NodeJS.Timeout = setTimeout(() => {
      getCountries();
    }, 300);

    return () => clearTimeout(timeout);
  }, [getCountries]);

  useEffect(() => {
    const start = (pageNum - 1) * PAGE_SIZE;
    const end = pageNum * PAGE_SIZE;
    setCountries((pre) => [...pre, ...allCountries.slice(start, end)]);
  }, [pageNum]);

  useEffect(() => {
    if (
      countries.length > 0 &&
      allCountries.length > 0 &&
      countries.length === allCountries.length
    ) {
      setHasMore(false);
    }
  }, [countries]);

  return { isLoading, countries, updateName, updateCode, loadMore, hasMore };
};

export default useCountries;
