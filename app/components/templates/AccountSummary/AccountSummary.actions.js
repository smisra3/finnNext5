// @flow
import {
  LOAD_ACCOUNT_SUMMARY_DATA,
  LOAD_ACCOUNT_SUMMARY_DATA_SUCCESS,
  LOAD_ACCOUNT_SUMMARY_DATA_FAILURE,
  CHANGE_SORT_ORDER,
} from './AccountSummary.constants';

import type {
  LoadAccountSummaryFailureActionType,
  LoadAccountSummaryDataActionType,
  LoadAccountSummaryDataSuccessActionType,
  ChangeSortOrderActionType,
} from './types';

export const loadAccountSummaryPageAction = (): LoadAccountSummaryDataActionType => ({
  type: LOAD_ACCOUNT_SUMMARY_DATA,
});

export const loadAccountSummaryPageSuccessAction =
  (data): LoadAccountSummaryDataSuccessActionType =>
    ({
      type: LOAD_ACCOUNT_SUMMARY_DATA_SUCCESS,
      data,
    });

export const loadAccountSummaryFailureAction =
  (error: Error): LoadAccountSummaryFailureActionType =>
    ({
      type: LOAD_ACCOUNT_SUMMARY_DATA_FAILURE,
      error,
    });

export const changeSortingOrderAction = (): ChangeSortOrderActionType =>
  ({ type: CHANGE_SORT_ORDER });

export default [loadAccountSummaryPageAction];
