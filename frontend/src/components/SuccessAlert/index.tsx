import objectTostring from "../../utils/objectToString";
import { useDispatch } from 'react-redux';
import { displayAlert } from '../../redux/reducers/storeManager';
type SuccessAlertProps = {
  message: object | {};
}

export default function SuccessAlert({ message = {} }: SuccessAlertProps) {
  const dispatch = useDispatch();
  const dispatchDisplayAlert = () => dispatch(displayAlert({}));
  const successMessage = objectTostring(message)

  return (
    <div role="alert" className="alert alert-success ml-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 shrink-0 stroke-current"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <div>
        <span>{successMessage}</span>
      </div>
      <button className="btn btn-sm" onClick={() => dispatchDisplayAlert()}>X</button>
    </div>
  );
}
