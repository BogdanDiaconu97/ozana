import { defaultReducer } from '../../helpers/redux-logic';
import { actionTypes } from './actions';
export const initialState = {
  email: null,
  token: null,
  confirmedEmail: false,
};

export const userReducer = defaultReducer(initialState, actionTypes);
