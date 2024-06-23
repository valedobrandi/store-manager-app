import useRoutesOptions from '../../Hooks/useRoutesOptions';
import ROUTE_OPTION from '../../assets/documents/routesOptions';
import Select from '../Select';

export default function RequestOptions() {
  const { route } = useRoutesOptions();

  return (
    <div>
      <Select options={ Object.keys(ROUTE_OPTION[route] || []) } />
    </div>
  );
}
