import useFormState from '../../Hooks/useFormState';
import useRoutesOptions from '../../Hooks/useRoutesOptions';
import FetchButton from '../FetchButton';
import Input from '../Input';
import SearchType from '../SearchType';

type SearchBarPops = {
  usefetchLazyData: (query: { name: string, id: string }) => void
};

export default function SearchBar({ usefetchLazyData }: SearchBarPops) {
  const { productForm, updateProductForm } = useFormState();
  const { fetch } = useRoutesOptions();
  return (
    <div className="m-4">
      <SearchType />
      <div>
        <Input
          name={ fetch }
          setInput={ updateProductForm }
          input={ productForm }
          key="search"
        />
        <FetchButton
          title="SEARCH"
          input={ productForm }
          usefetchLazyData={ usefetchLazyData }
        />
      </div>
    </div>

  );
}
