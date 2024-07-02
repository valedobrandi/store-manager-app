import { ReactNode } from 'react';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SerializedError } from '@reduxjs/toolkit';
import SuccessAlert from '../SuccessAlert';
import ErrorAlert from '../ErrorAlert';
import useConditionalRendering from '../../Hooks/useConditionalRendering';

type AlertProps = {
  children: JSX.Element[] | ReactNode | string | boolean;
  isSuccess: boolean;
  isError: boolean;
  error: FetchBaseQueryError | SerializedError | undefined;
  sendData: object;
};

export default function Alerts(
  { children, isSuccess, isError, error, sendData }: AlertProps,
) {
  const { displayAlert } = useConditionalRendering();
  return (
    <div>
      {children}
      {displayAlert && (
        <>
          {isSuccess && <SuccessAlert message={ sendData } />}
          {isError && <ErrorAlert message={ error } />}
        </>
      )}
    </div>
  );
}
