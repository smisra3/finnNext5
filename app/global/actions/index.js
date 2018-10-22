// @flow
import {
  DEVICE_TYPE,
  CURRENT_ROUTE,
  IS_TABLET,
  PAGE_URL,
  PAGE_QUERY,
  PAGE_ORIGIN,
  CHECK_AUTH,
  CHECK_AUTH_SUCCESS,
  SET_USER_STATE,
  GLOBAL_DATA_FAILURE,
  GET_LABELS,
  GET_LABELS_SUCCESS,
  GET_LABELS_FAILURE,
} from '../constants';

export const globalDataFailureAction = (error: Error) => ({ type: GLOBAL_DATA_FAILURE, error });
export const checkAuthenticationAction = () => ({ type: CHECK_AUTH });
export const setAuthenticationAction = (isUserLoggedIn: boolean, sessionData: any) => ({ type: CHECK_AUTH_SUCCESS, sessionInfo:{isUserLoggedIn,sessionData} });
export const setUserStateAction = (userState: any) => ({ type: SET_USER_STATE, userState });
export const setLabelsAction = (labels: any) => ({ type: GET_LABELS_SUCCESS, labels });
export const setLabelsErrorAction = (error: Error) => ({ type: GET_LABELS_FAILURE, error });

// Page-level actions go here
export const pageActions = [];

// Export client side global page-level actions.
export const pageClientSideActions = [checkAuthenticationAction];

// All default actions go here
export default [];

export const serverActions = {
  addDeviceType: (deviceType: string) => ({ type: DEVICE_TYPE, deviceType }),
  addIsTablet: (isTablet: string) => ({ type: IS_TABLET, isTablet }),
  setCurrentRoute: (pathname: string) => ({ type: CURRENT_ROUTE, pathname }),
  setPageUrl: (pageUrl: string) => ({ type: PAGE_URL, pageUrl }),
  setPageQuery: (pageQuery: { [string]: Array<string> }) => ({ type: PAGE_QUERY, pageQuery }),
  setPageOrigin: (origin: string) => ({ type: PAGE_ORIGIN, origin }),
  getLables: () => ({ type: GET_LABELS }),
};
