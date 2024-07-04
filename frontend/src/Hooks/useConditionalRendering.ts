import { useDispatch, useSelector } from 'react-redux';
import useRoutesOptions from './useRoutesOptions';
import { InitialStateType } from '../types/reduxState';
import { displayAlert } from '../redux/reducers/storeManager';

export default function useConditionalRendering() {
  const dispatch = useDispatch();
  const { request, route } = useRoutesOptions();

  const dispatchDisplayAlert = (isAlert: boolean) => {
    dispatch(displayAlert({ isAlert }));
  };
  const { isAlert } = useSelector(
    (state: InitialStateType) => state.storeManager.storeSearch,
  );

  const isFetch = () => request === 'search';
  const isRegister = () => request === 'register';
  const isDelete = () => request === 'delete';
  const isUpdate = () => request === 'update';
  const isSales = () => route === 'sales';
  const isProducts = () => route === 'products';
  const isItemList = (saleItems: {
    productId: string;
    quantity: string;
  }[]) => saleItems.length > 0;

  return {
    isFetch,
    isRegister,
    isDelete,
    isUpdate,
    isAlert,
    isSales,
    isProducts,
    isItemList,
    dispatchDisplayAlert,
  };
}
