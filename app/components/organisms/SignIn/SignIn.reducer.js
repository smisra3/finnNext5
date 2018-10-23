// @flow
import {
  SIGNIN_ERRORS,
  LOADING_INDICATOR_STATUS,
  VALIDATE_USER_NAME_SUCCESS,
  UPDATE_LOGIN_FORM,
} from './SignIn.constants';
import { updateState } from '../../../utils/utils';

export const initialState = {
  loginForm: {
    userName: '',
    password: '',
  },
};
/**
 * Method to capture error in case of action failure
 * @param state - State
 * @param action - Failure action
 * @return state - error along with current State
 */

const setErrors = (state, { error }) => updateState(state, { errorMessage: error });

const loadingIndicator = (state, { status }) => updateState(state, { isLoaderActive: status });

const setUserValid = (state, { response }) => updateState(state, { isUserValid: response });

const updateLogin = (state, action) => {
  const newState = { ...state };
  newState.loginForm[action.identifier] = action.value;
  return newState;
};

const signIn = (state = initialState, action) => {
  switch (action.type) {
    case SIGNIN_ERRORS:
      return setErrors(state, action);
    case LOADING_INDICATOR_STATUS:
      return loadingIndicator(state, action);
    case VALIDATE_USER_NAME_SUCCESS:
      return setUserValid(state, action);
    case UPDATE_LOGIN_FORM:
      return updateLogin(state, action);
    default:
      return state;
  }
};

export default signIn;
