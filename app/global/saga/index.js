import { all, call, put, takeLatest } from 'redux-saga/effects';
import API from '../../utils/fetch';
import API_URLS from '../../constants/api/url';
import { globalDataFailureAction, setAuthenticationAction, setUserStateAction, setLabelsAction, setLabelsError } from '../actions';
import { CHECK_AUTH, GET_LABELS } from '../constants';
import { STATUS_ERROR, STATUS_SUCCESS } from '../../constants';
import signInSaga from '../../components/organisms/SignIn/SignIn.saga';
import Labels from '../../../mock/labels';
import Axios from 'axios';

export function* authenticationSaga() {
  try {
    const data = yield call(API.fetch, API_URLS.userStatus);
    if (data.status.toUpperCase() === STATUS_ERROR) {
      yield put(setAuthenticationAction(false, {}));
      yield put(globalDataFailureAction(data));
    } else if (data.status.toUpperCase() === STATUS_SUCCESS) {
      yield put(setAuthenticationAction(true, data.data));
      yield put(setUserStateAction(data.data));
    }
  } catch (err) {
    yield put(globalDataFailureAction(err));
  }
}

export function* fetchLabels(action) {
  try {
    const labels = yield call(API.fetch, API_URLS.labels, action);
    yield put(setLabelsAction(labels || Labels));
  } catch (err) {
    yield put(setLabelsAction(Labels));
  }
}

export function* getHeaderFooterData() {
  const response = yield call(Axios, 'https://travelnowhere.citybreakweb.com/api/gateway/header-footer');
  yield put({ type: 'GOT_HEADER_FOOTER_DATA', payload: response.data});
}

export default function* globalSaga() {
  yield all([
    takeLatest(CHECK_AUTH, authenticationSaga),
    [...signInSaga()],
    takeLatest(GET_LABELS, fetchLabels),
    takeLatest('GET_HEADER_FOOTER_DATA', getHeaderFooterData)
  ]);
}
