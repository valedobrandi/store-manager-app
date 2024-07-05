import useConditionalRendering from '../../Hooks/useConditionalRendering';
import { ProductFormType, SaleFormType,
  UpdateProductFromSaleFormType } from '../../types/fetchButtonTypes';
import useFormState from '../../Hooks/useFormState';
import Button from '../Button';
import FetchButton from '../FetchButton';
import Input from '../Input';
import Label from '../Label';
import Table from '../Table';
import useButtonStatus from '../../Hooks/useButtonStatus';
import Badge from '../Badge';

type RegisterBarPops = {
  usefetchLazyData: (query: ProductFormType |
  SaleFormType | UpdateProductFromSaleFormType | undefined) => void
};

export default function RegisterBar({ usefetchLazyData }: RegisterBarPops) {
  const { productForm, updateProductForm } = useFormState();
  const { saleForm, registerNewSaleForm,
    saleItems, itemsList, addSaleItem } = useFormState();
  const { isSales, isProducts, isItemList, close, btnBadge } = useConditionalRendering();
  const { isArrayEmpty } = useButtonStatus();
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
        <>
          <div className="m-4">
            <Label title="PRODUCT ID">
              <Input
                name="productId"
                width="max-w-20"
                setInput={ registerNewSaleForm }
                input={ saleForm }
                key="register"
              />
            </Label>
            <Label title="QUANTITY">
              <Input
                name="quantity"
                width="max-w-20"
                setInput={ registerNewSaleForm }
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
              isDisabled={ isArrayEmpty(itemsList.length) }
            />
          </div>
          {isItemList(itemsList.length) && (
            <Table data={ itemsList } useRefresh={ () => {} } close={ close }>
              <Badge btnBadge={ btnBadge } />
            </Table>
          )}
        </>
      )}
    </div>
  );
}
