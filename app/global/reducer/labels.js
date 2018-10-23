// @flow

import { GET_LABELS_SUCCESS } from '../constants';

import type { getLabelsActionType } from '../types';
import { updateState } from '../../utils/utils';

export const initState = {
  accountSummary: {},
};

export default (state = initState, action: getLabelsActionType) => {
  switch (action.type) {
    case GET_LABELS_SUCCESS:
      return updateState(state, action.labels);
    default:
      return state;
  }
};
