import { useSelector } from "react-redux";
import useRoutesOptions from "./useRoutesOptions";
import { InitialStateType } from "../types/reduxState";

export default function useConditionalRendering() {
  const { request } = useRoutesOptions();
  const { displayAlert } = useSelector(
    (state: InitialStateType) => state.storeManager.storeSearch,
  );
  const isFetch = () => request === 'search';
  const isRegister = () => request === 'register';
  const isDelete = () => request === 'delete';
  const isUpdate = () => request === 'update';

  return { isFetch, isRegister, isDelete, isUpdate, displayAlert };
}
