import useRoutesOptions from '../../Hooks/useRoutesOptions';
import Button from '../Button';

export default function SearchType() {
  const { btnSearch, fetch, dispatchSelectFetch } = useRoutesOptions();
  return (
    <div className="m-4">
      {
        btnSearch.map((value) => (
          <Button
            key={ value }
            dispatch={ dispatchSelectFetch }
            store={ fetch }
            name={ value }
          />
        ))
}
    </div>
  );
}
