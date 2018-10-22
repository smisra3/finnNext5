// @flow
import type { AccountSummaryActions } from './types';
import {
  LOAD_ACCOUNT_SUMMARY_DATA_FAILURE,
  LOAD_ACCOUNT_SUMMARY_DATA_SUCCESS,
  LOAD_ACCOUNT_SUMMARY_DATA,
  CHANGE_SORT_ORDER,
} from './AccountSummary.constants';
import { updateState } from '../../../utils/utils';

const initialData = {
  sortOrder: 0,
};

export const accountSummary = (state = initialData, action: AccountSummaryActions) => {
  switch (action.type) {
    case LOAD_ACCOUNT_SUMMARY_DATA:
      return updateState(state, { isFetching: true });
    case LOAD_ACCOUNT_SUMMARY_DATA_FAILURE:
      return updateState(state, { error: action.error }, { isFetching: false });
    case LOAD_ACCOUNT_SUMMARY_DATA_SUCCESS:
      return updateState(state, action.data, { isFetching: false });
    case CHANGE_SORT_ORDER:
      return updateState(state, { sortOrder: !state.sortOrder });
    default:
      return state;
  }
};

export default accountSummary;
