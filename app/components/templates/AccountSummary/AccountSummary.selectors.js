import { createSelector } from 'reselect';
import get from 'lodash/get';
import { LABELS_STATE_KEY } from '../../../global/constants';

export const labelsSelector = state => get(state, ['global', LABELS_STATE_KEY]);
export const makeLabelsSelector = () => createSelector(labelsSelector, labels => labels);
export const userStateSelector = state => get(state, ['global', 'globalData', 'userState']);
export const makeUserStateSelector = () =>
  createSelector(userStateSelector, userState => userState);
