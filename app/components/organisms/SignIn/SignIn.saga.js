// @flow
import { call, put, takeLatest } from 'redux-saga/effects';

import { SIGNIN_REQUEST, VALIDATE_USER_NAME, UPDATE_LOGIN_FORM } from './SignIn.constants';
import {
  loadingIndicatorAction,
  setErrorsAction,
  setUserValidAction,
} from './SignIn.actions';
import API from '../../../utils/fetch';
import { STATUS_ERROR, STATUS_SUCCESS } from '../../../constants';
import API_URLS from '../../../constants/api/url';
import { setUserStateAction, setAuthenticationAction } from '../../../global/actions';
import { loginResponseError } from '../../../../app/locales/en-US';

export function* validateUserSaga(action): Generator<*, *, *> {
  try {
    yield put(loadingIndicatorAction(true));
    yield put(setUserValidAction(false));
    yield put(setErrorsAction({}));
    const data = yield call(API.fetch, API_URLS.validateUsername);
    if (data.status.toLocaleUpperCase() === STATUS_ERROR) {
      yield put(setErrorsAction(data.message));
      yield put(loadingIndicatorAction(false));
    } else if (data.status.toLocaleUpperCase() === STATUS_SUCCESS) {
      yield put(setUserValidAction(data.data[0].isUserExists));
      yield put(loadingIndicatorAction(false));
    }
  } catch (err) {
    yield put(loadingIndicatorAction(false));
    yield put(setErrorsAction(loginResponseError));
  }
}

export function* userSignInSaga(action): Generator<*, *, *> {
  try {
    yield put(setErrorsAction({}));
    yield put(loadingIndicatorAction(true));
    const data = yield call(API.fetch, API_URLS.login);
    if (data.status.toUpperCase() === STATUS_ERROR) {
      yield put(setAuthenticationAction(false, {}));
      yield put(setErrorsAction(data.message));
      yield put(loadingIndicatorAction(false));
    } else if (data.status.toUpperCase() === STATUS_SUCCESS) {
      yield put(setAuthenticationAction(true, data.data));
      yield put(setUserStateAction(data.data));
      yield put(loadingIndicatorAction(false));
    }
  } catch (err) {
    yield put(loadingIndicatorAction(false));
    yield put(setErrorsAction(loginResponseError));
  }
}

const signInSaga = () => [yield takeLatest(VALIDATE_USER_NAME, validateUserSaga), takeLatest(SIGNIN_REQUEST, userSignInSaga)];

export default signInSaga;
