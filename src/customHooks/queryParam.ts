import { useSearchParams } from 'react-router-dom';

const useQueryParam = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Get a query parameter value
  const getQueryParam = (key: string): string | null => {
    return searchParams.get(key);
  };

  // Set or update a query parameter
  const setQueryParam = (key: string, value: string) => {
    searchParams.set(key, value);
    setSearchParams(searchParams);
  };

  // Remove a query parameter
  const removeQueryParam = (key: string) => {
    searchParams.delete(key);
    setSearchParams(searchParams);
  };
  const editMode = getQueryParam('v') === 'e';

  return { getQueryParam, setQueryParam, removeQueryParam, editMode };
};

export default useQueryParam;
