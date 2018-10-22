// @flow
import { CHANGE_SORT_ORDER } from '../../templates/AccountSummary/AccountSummary.constants';

import { ChangeSortOrderActionType } from './types';


const changeSortingOrderAction = (): ChangeSortOrderActionType =>
  ({ type: CHANGE_SORT_ORDER });

export default changeSortingOrderAction;

