import useConditionalRendering from '../../Hooks/useConditionalRendering';
import { ProductFormType, SaleFormType } from '../../types/fetchButtonTypes';
import useFormState from '../../Hooks/useFormState';
import Button from '../Button';
import FetchButton from '../FetchButton';
import Input from '../Input';
import Label from '../Label';
import Table from '../Table';

type RegisterBarPops = {
  usefetchLazyData: (query: ProductFormType | SaleFormType) => void
};

export default function RegisterBar({ usefetchLazyData }: RegisterBarPops) {
  const { productForm, updateProductForm } = useFormState();
  const { saleForm, updateSaleForm, itemsList, saleItems, addSaleItem } = useFormState();
  const { isSales, isProducts } = useConditionalRendering();
  return (
    <div>
      {isProducts() && (
        <div className="m-4">
          <Label title="NAME">
            <Input
              name="name"
              setInput={ updateProductForm }
              input={ productForm }
              key="register"
            />
          </Label>
          <FetchButton
            title="REGISTER"
            input={ productForm }
            usefetchLazyData={ usefetchLazyData }
          />
        </div>
      )}
      {isSales() && (
        <div className="m-4">
          <Label title="PRODUCT ID">
            <Input
              name="productId"
              width="max-w-20"
              setInput={ updateSaleForm }
              input={ saleForm }
              key="register"
            />
          </Label>
          <Label title="QUANTITY">
            <Input
              name="quantity"
              width="max-w-20"
              setInput={ updateSaleForm }
              input={ saleForm }
              key="register"
            />
          </Label>
          <Button
            name="ADD ITEM"
            btnType="success"
            dispatch={ addSaleItem }
          />
          <FetchButton
            title="REGISTER"
            input={ saleItems }
            usefetchLazyData={ usefetchLazyData }
          />
          <div>
            <Table data={ itemsList } />
          </div>
        </div>
      )}
    </div>
  );
}
