import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

export type ReduxState = {
  isFetching: boolean,
  errorMessage: string,
};

export type InitialStateType = {
  route: string
};

export type Dispatch = ThunkDispatch<ReduxState, null, AnyAction>;
