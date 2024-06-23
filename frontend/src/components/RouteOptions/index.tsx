import useRoutesOptions from '../../Hooks/useRoutesOptions';
import ROUTE_OPTION from '../../assets/documents/routesOptions';
import Button from '../Button';

export default function RouteOptions() {
  const { dispatchSelectRoute, route } = useRoutesOptions();

  const routes = Object.keys(ROUTE_OPTION);

  return (
    <div className="m-4">
      {
        routes.map((value) => (
          <Button
            key={ value }
            dispatchSelectRoute={ dispatchSelectRoute }
            rootState={ route }
            name={ value }
          />
        ))
      }
    </div>
  );
}
