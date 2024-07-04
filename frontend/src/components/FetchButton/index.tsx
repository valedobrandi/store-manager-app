import { ProductFormType, SaleFormType } from '../../types/fetchButtonTypes';

type FetchButtonProps = {
  usefetchLazyData: (query: ProductFormType | SaleFormType) => void;
  input: ProductFormType | SaleFormType;
  title: string;
};

export default function FetchButton({
  usefetchLazyData, title, input }: FetchButtonProps) {
  return (
    <button
      className="btn btn-outline btn-neutral uppercase m-1"
      onClick={ () => usefetchLazyData(input) }
    >
      {title}
    </button>
  );
}
