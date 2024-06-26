import { useLazyFetchDataQuery } from '../redux/reducers/apiSlice';

export default function useFetchProducts() {
  const [fetchTrigger,
    { data = [], isError, error, isLoading, isSuccess }] = useLazyFetchDataQuery();
  const usefetchLazyData = () => { fetchTrigger(); };

  const columns = data.reduce((prev, curr) => {
    const keys = Object.keys(curr);
    keys.forEach((key) => {
      if (!prev.includes(key)) prev.push(key);
    });
    return prev;
  }, []);

  return { usefetchLazyData, data, isError, error, isLoading, isSuccess, columns };
}
