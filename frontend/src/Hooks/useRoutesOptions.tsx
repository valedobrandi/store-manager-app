import { useDispatch, useSelector } from 'react-redux';
import { actionSelectRoute } from '../redux/actions';
import { Dispatch } from '../types/reduxState';

export default function useRoutesOptions() {
  const dispatch: Dispatch = useDispatch();
  const { route } = useSelector(
    (state: { storeManagerReducer: {
      route: 'sales' | 'products' } }) => state.storeManagerReducer,
  );
  const dispatchSelectRoute = (payload: string) => dispatch(actionSelectRoute(payload));

  return { dispatchSelectRoute, route };
}
