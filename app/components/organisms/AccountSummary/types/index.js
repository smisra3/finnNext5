// @flow
import {
  LOAD_ACCOUNT_SUMMARY_DATA_FAILURE,
  LOAD_ACCOUNT_SUMMARY_DATA,
  LOAD_ACCOUNT_SUMMARY_DATA_SUCCESS,
  CHANGE_SORT_ORDER,
} from '../../../templates/AccountSummary/AccountSummary.constants';

export type LoadAccountSummaryFailureActionType = {
  type: typeof LOAD_ACCOUNT_SUMMARY_DATA_FAILURE,
  error: Error,
};

export type LoadAccountSummaryDataActionType = {
  type: typeof LOAD_ACCOUNT_SUMMARY_DATA,
};

export type LoadAccountSummaryDataSuccessActionType = {
  type: typeof LOAD_ACCOUNT_SUMMARY_DATA_SUCCESS,
  data: any,
};

export type ChangeSortOrderActionType = {
  type: typeof CHANGE_SORT_ORDER
}

export type PropsTypes = {
  seoData: Object,
};

export type MapState = {
  seoData: Object,
};

export type AccountSummaryActionsType =
  | LoadAccountSummaryFailureActionType
  | LoadAccountSummaryDataActionType
  | LoadAccountSummaryDataSuccessActionType
  | ChangeSortOrderActionType;
