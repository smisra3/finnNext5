// @flow
import { combineReducers } from 'redux';
import globalData from './globalData';
import signIn from './../../components/organisms/SignIn/SignIn.reducer';
import labels from './labels';

export default combineReducers({
  globalData,
  signIn,
  labels,
});

export const globalDataStructure = [['global', 'globalData', 'deviceType']];
