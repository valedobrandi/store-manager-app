import { useDispatch } from 'react-redux';
import {
  useSendDataMutation,
} from '../redux/reducers/apiSlice';
import useRoutesOptions from './useRoutesOptions';
import getRoute from '../utils/getRoute';
import { displayAlert } from '../redux/reducers/storeManager';
import { ProductFormType, SaleFormType } from '../types/fetchButtonTypes';

export default function useSendData() {
  const { fetch, route, request } = useRoutesOptions();
  const [sendTrigger,
    { data = [], isLoading, error, isError, isSuccess },
  ] = useSendDataMutation();
  const dispatch = useDispatch();
  const dispatchDisplayAlert = () => dispatch(displayAlert({}));

  const sendData = !Array.isArray(data) ? [data] : data;
  console.log(sendData);

  const useSendLazyData = (queries: ProductFormType | SaleFormType) => {
    dispatchDisplayAlert();
    const URL = getRoute(fetch, route, request, queries);
    sendTrigger(URL);
  };

  const sendHttp = {
    useSendLazyData,
    sendData,
    isError,
    isLoading,
    error,
    isSuccess,
  };
  return { sendHttp };
}
