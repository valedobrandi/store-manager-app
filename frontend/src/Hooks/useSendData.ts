import {
  useSendDataMutation,
} from '../redux/reducers/apiSlice';
import useRoutesOptions from './useRoutesOptions';
import getRoute from '../utils/getRoute';
import { ProductFormType, SaleFormType } from '../types/fetchButtonTypes';
import useConditionalRendering from './useConditionalRendering';

export default function useSendData() {
  const { dispatchDisplayAlert } = useConditionalRendering();
  const { fetch, route, request } = useRoutesOptions();
  const [sendTrigger,
    { data = [], isLoading, error, isError, isSuccess },
  ] = useSendDataMutation();

  const sendData = !Array.isArray(data) ? [data] : data;

  const useSendLazyData = (queries: ProductFormType | SaleFormType) => {
    dispatchDisplayAlert(true);
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
