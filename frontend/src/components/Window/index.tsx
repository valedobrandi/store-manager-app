import { ReactNode } from 'react';
import EndPoints from '../EndPoints';
import HTTPMethods from '../HTTPMethods';
import SearchType from '../SearchType';
import useConditionalRendering from '../../Hooks/useConditionalRendering';
import Input from '../Input';
import FetchButton from '../FetchButton';
import useFormState from '../../Hooks/useFormState';
import useRoutesOptions from '../../Hooks/useRoutesOptions';
import { ProductFormType, SaleFormType,
  UpdateProductFromSaleFormType } from '../../types/fetchButtonTypes';

type WindowPropsType = {
  children: JSX.Element[] | ReactNode | string | boolean;
  usefetchLazyData: (query: ProductFormType |
  SaleFormType | UpdateProductFromSaleFormType | undefined) => void;
};

export default function Window({ children, usefetchLazyData }: WindowPropsType) {
  const { typeRequest } = useConditionalRendering();
  const { productForm, updateProductForm } = useFormState();
  const { fetch } = useRoutesOptions();
  const { onCloseWindown } = useConditionalRendering();
  return (
    <div
      className="mockup-window border bg-base-300
    h-[90vh] max-w-[1440px] mx-auto p-10"
    >
      <h1 className="text-black text-5xl font-VT323 text-left">Data Base Manager</h1>
      <EndPoints />
      <HTTPMethods />
      {typeRequest('search') && (
        <div className="flex items-center m-4">
          <SearchType />
          <Input
            name={ fetch }
            setInput={ updateProductForm }
            input={ productForm }
            key="search"
          />
          <FetchButton
            title="SEARCH"
            input={ productForm }
            usefetchLazyData={ () => {
              usefetchLazyData(productForm);
              onCloseWindown(false);
            } }
          />
        </div>
      )}
      <div
        className="flex-col justify-center
       border-t border-base-300 overflow-auto"
      >
        {children}
      </div>
    </div>
  );
}
