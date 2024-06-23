import { useDispatch, useSelector } from 'react-redux';
import { selectRoute } from '../redux/reducers/storeManager';

export default function useRoutesOptions() {
  const dispatch = useDispatch();
  const dispatchSelectRoute = (route: string) => dispatch(selectRoute({ route }));
  const routeType = useSelector(
    (state: { route: 'sales' | 'products' }) => state.route,
  );

  return { dispatchSelectRoute, routeType };
}

/*   const selectRoute = useSelector(
  (state: { storeManagerReducer: {
    route: 'sales' | 'products' } }) => state.storeManagerReducer,
); */
