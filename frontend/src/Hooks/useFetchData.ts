import {
  useLazyFetchDataQuery,
} from '../redux/reducers/apiSlice';
import useRoutesOptions from './useRoutesOptions';
import getRoute from '../utils/getRoute';

import { ProductFormType, SaleFormType } from '../types/fetchButtonTypes';
import useConditionalRendering from './useConditionalRendering';

export default function useFetchData() {
  const { dispatchDisplayAlert } = useConditionalRendering();
  const { fetch, route, request } = useRoutesOptions();
  const [fetchTrigger,
    { data = [], isLoading, error, isError, isSuccess },
  ] = useLazyFetchDataQuery();

  const fetchData = !Array.isArray(data) ? [data] : data;

  const usefetchLazyData = (queries: ProductFormType | SaleFormType) => {
    dispatchDisplayAlert(true);
    const URL = getRoute(fetch, route, request, queries);
    fetchTrigger(URL);
  };

  const fetchHttp = {
    usefetchLazyData,
    fetchData,
    isError,
    isLoading,
    error,
    isSuccess,
  };

  return { fetchHttp };
}
