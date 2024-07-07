import useConditionalRendering from '../../Hooks/useConditionalRendering';
import useFormState from '../../Hooks/useFormState';
import useRoutesOptions from '../../Hooks/useRoutesOptions';
import { ProductFormType, SaleFormType,
  UpdateProductFromSaleFormType } from '../../types/fetchButtonTypes';
import FetchButton from '../FetchButton';
import Input from '../Input';
import SearchType from '../SearchType';

type SearchBarPops = {
  usefetchLazyData: (query: ProductFormType |
  SaleFormType | UpdateProductFromSaleFormType) => void
};

export default function SearchBar({ usefetchLazyData }: SearchBarPops) {
  const { productForm, updateProductForm } = useFormState();
  const { fetch } = useRoutesOptions();
  const { isFetch } = useConditionalRendering();

  return (
    <div className="flex m-4">
      {isFetch() && <SearchType />}
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
