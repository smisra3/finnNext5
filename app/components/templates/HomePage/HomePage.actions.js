// @flow
import type { Map } from 'immutable';
import {
  LOAD_HOME_FAILURE,
  LOAD_HOME_SEO,
  LOAD_HOME_SEO_SUCCESS,
  LOAD_HOME_EDITORIAL_DATA,
  LOAD_HOME_EDITORIAL_DATA_SUCCESS,
} from './HomePage.constants';
import type {
  LoadHomeFailureAction,
  LoadSeoDataAction,
  LoadSeoDataSuccessAction,
  LoadHomeEditorialDataAction,
  LoadHomeEditorialDataSuccessAction,
} from './types';

export const loadHomeFailure = (error: Error): LoadHomeFailureAction => ({
  type: LOAD_HOME_FAILURE,
  error,
});

export const loadHomeSeo = (): LoadSeoDataAction => ({ type: LOAD_HOME_SEO });

export const loadHomeSeoSuccess = (data: Map): LoadSeoDataSuccessAction => ({
  type: LOAD_HOME_SEO_SUCCESS,
  data,
});

export const loadHomePageEditorial = (): LoadHomeEditorialDataAction => ({
  type: LOAD_HOME_EDITORIAL_DATA,
  slotId: 'homePageSlot',
});

export const loadHomePageEditorialSuccess = (data: Map): LoadHomeEditorialDataSuccessAction => ({
  type: LOAD_HOME_EDITORIAL_DATA_SUCCESS,
  data,
});

export const loadHomePageData = () => ({
  type: 'GET_HOME_PAGE_DATA',
});

export default [loadHomePageData];
