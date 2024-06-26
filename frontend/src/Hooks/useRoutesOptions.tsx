import { useDispatch, useSelector } from 'react-redux';
import { selectRoute, selectRequest } from '../redux/reducers/storeManager';
import { InitialStateType } from '../types/reduxState';
import ROUTE_OPTION from '../assets/documents/routesOptions';

export default function useRoutesOptions() {
  const dispatch = useDispatch();
  const dispatchSelectRoute = (route: string) => dispatch(selectRoute({ route }));
  const dispatchSelectRequest = (request: string) => dispatch(selectRequest({ request }));
  const { route, request } = useSelector(
    (state: InitialStateType) => state.storeManager.storeSearch,
  );

  const btnRoutes = Object.keys(ROUTE_OPTION);
  const btnRequests = Object.keys(ROUTE_OPTION[route]);
  const btnSearch = Object.keys(ROUTE_OPTION[route][request]) || [];
  return {
    dispatchSelectRoute,
    dispatchSelectRequest,
    route,
    request,
    btnRoutes,
    btnRequests,
    btnSearch,
  };
}
