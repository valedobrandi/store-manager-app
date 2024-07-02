import {
  useLazyFetchDataQuery,
} from '../redux/reducers/apiSlice';
import createColumns from '../utils/createColumns';
import useRoutesOptions from './useRoutesOptions';
import getRoute from '../utils/getRoute';
import { useDispatch } from 'react-redux';
import { displayAlert } from '../redux/reducers/storeManager';

export default function useFetchData() {
  const { fetch, route, request } = useRoutesOptions();
  const [fetchTrigger,
    { data = [], isLoading, error, isError, isSuccess }
  ] = useLazyFetchDataQuery();

  const dispatch = useDispatch();
  const dispatchDisplayAlert = () => dispatch(displayAlert({}));

  const columns = createColumns(data);
  const fetchData = !Array.isArray(data) ? [data] : data;

  const usefetchLazyData = (queries: { name: string, id: string }) => {
    dispatchDisplayAlert()
    const URL = getRoute(fetch, route, request, queries);
    fetchTrigger(URL);
  };


  const fetchHttp = {
    usefetchLazyData,
    fetchData,
    isError,
    isLoading,
    columns,
    error,
    isSuccess,
  }


  return { fetchHttp };
}
