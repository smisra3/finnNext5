import { put, takeLatest, call, all } from 'redux-saga/effects';
import { loadAccountSummaryPageSuccessAction, loadAccountSummaryFailureAction } from './AccountSummary.actions';
import { LOAD_ACCOUNT_SUMMARY_DATA } from './AccountSummary.constants';
import API_URLS from '../../../constants/api/url';
import API from '../../../utils/fetch';

export function* accountSummaryDataSaga(action) {
  try {
    const data = yield call(API.fetch, API_URLS.accountSummary, action);
    yield put(loadAccountSummaryPageSuccessAction(data));
  } catch (err) {
    yield put(loadAccountSummaryFailureAction(err));
  }
}

export default function* accountSummaryLayoutSaga() {
  yield all([takeLatest(LOAD_ACCOUNT_SUMMARY_DATA, accountSummaryDataSaga)]);
}
