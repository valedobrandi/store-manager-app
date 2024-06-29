import useFetchProducts from '../../Hooks/useFetchProducts';
import Input from '../Input';

type SearchBarPops = {
  usefetchLazyData: (query: string) => void
};

export default function SearchBar({ usefetchLazyData }: SearchBarPops) {
  const { state } = useFetchProducts();

  return (
    <div className="m-4">
      <Input state={ state } />
      <button
        className="btn btn-outline btn-neutral uppercase m-1"
        onClick={ () => usefetchLazyData(state.input) }
      >
        SEARCH
      </button>
    </div>
  );
}
