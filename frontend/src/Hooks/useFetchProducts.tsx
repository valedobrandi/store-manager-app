import { useState } from 'react';
import { useLazyFetchDataQuery } from '../redux/reducers/apiSlice';
import createColumns from '../utils/createColumns';
import useRoutesOptions from './useRoutesOptions';
import getRoute from '../utils/getRoute';

export default function useFetchProducts() {
  const [input, setInput] = useState('');
  const { fetch, route, request } = useRoutesOptions();

  const [fetchTrigger,
    { data = [], isError, error, isLoading, isSuccess }] = useLazyFetchDataQuery();

  const columns = createColumns(data);
  const selectData = !Array.isArray(data) ? [data] : data;

  const usefetchLazyData = (...queries: string[]) => {
    const URL = getRoute(fetch, route, request, queries);
    fetchTrigger(URL);
  };

  const state = { input, setInput };
  return {
    state,
    usefetchLazyData,
    selectData,
    isError,
    error,
    isLoading,
    isSuccess,
    columns,
  };
}
