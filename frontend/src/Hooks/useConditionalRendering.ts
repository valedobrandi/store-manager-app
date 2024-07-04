import { useSelector } from 'react-redux';
import useRoutesOptions from './useRoutesOptions';
import { InitialStateType } from '../types/reduxState';

export default function useConditionalRendering() {
  const { request, route } = useRoutesOptions();
  const { displayAlert } = useSelector(
    (state: InitialStateType) => state.storeManager.storeSearch,
  );
  const isFetch = () => request === 'search';
  const isRegister = () => request === 'register';
  const isDelete = () => request === 'delete';
  const isUpdate = () => request === 'update';
  const isSales = () => route === 'sales';
  const isProducts = () => route === 'products';

  return {
    isFetch,
    isRegister,
    isDelete,
    isUpdate,
    displayAlert,
    isSales,
    isProducts,
  };
}
