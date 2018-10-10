// @flow
import {
  SIGNIN_FAILURE,
  SIGNIN_REQUEST,
  LOADING_INDICATOR_STATUS,
  VALIDATE_USER_NAME,
  VALIDATE_USER_NAME_SUCCESS,
  SIGNIN_ERRORS,
  UPDATE_LOGIN_FORM
} from './SignIn.constants';
import { signInRequestType } from './types';

export const checkUserValidAction = (userID) => ({
  type: VALIDATE_USER_NAME,
  userID,
});

export const setUserValidAction = (response) => ({
  type: VALIDATE_USER_NAME_SUCCESS,
  response,
});

export const requestSignInAction = (requestData): signInRequestType => ({type: SIGNIN_REQUEST,
  requestData,
});

export const loadingIndicatorAction = (status) => ({
  type: LOADING_INDICATOR_STATUS,
  status
});

export const setErrorsAction = (error) => ({
  type: SIGNIN_ERRORS,
  error
});

export const updateLoginAction = (identifier, value) => {
  return {
    type: UPDATE_LOGIN_FORM,
    identifier,
    value
  }
}
