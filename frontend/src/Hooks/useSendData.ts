import {
    useSendDataMutation,
} from '../redux/reducers/apiSlice';
import createColumns from '../utils/createColumns';
import useRoutesOptions from './useRoutesOptions';
import getRoute from '../utils/getRoute';
import { useDispatch } from 'react-redux';
import { displayAlert } from '../redux/reducers/storeManager';

export default function useSendData() {
    const { fetch, route, request } = useRoutesOptions();
    const [sendTrigger,
        { data = [], isLoading, error, isError, isSuccess }
    ] = useSendDataMutation();
    const dispatch = useDispatch();
    const dispatchDisplayAlert = () => dispatch(displayAlert({}));


    const columns = createColumns(data);
    const sendData = !Array.isArray(data) ? [data] : data;

    const useSendLazyData = (queries: { name: string, id: string }) => {
        dispatchDisplayAlert()
        const URL = getRoute(fetch, route, request, queries);
        sendTrigger(URL);
    };

    const sendHttp = {
        useSendLazyData,
        sendData,
        isError,
        isLoading,
        columns,
        error,
        isSuccess,
    }
    return { sendHttp };
}