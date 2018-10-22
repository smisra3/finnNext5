// @flow
import { updateState } from '../../utils/utils';

import {
  DEVICE_TYPE,
  REGION_TYPE,
  CONFIG_KEYS,
  CURRENT_ROUTE,
  IS_TABLET,
  PAGE_URL,
  PAGE_QUERY,
  CHECK_AUTH_SUCCESS,
  SET_USER_STATE,
  USER_STATE_LOGGED_IN,
  PAGE_ORIGIN,
} from '../constants';
import type {
  DeviceType,
    GlobalType,
    ActiveRegionType,
    ConfigKeyType,
    RouteType,
    setIsTabletType,
} from '../types';
import { setCookie } from '../../utils/utils';

export const initState = {
  deviceType: '',
  activeRegion: '',
};

const setDevice = (state, { deviceType }): DeviceType => updateState(state, { deviceType });

const setIsTablet = (state, { isTablet }): setIsTabletType => updateState(state, { isTablet });

const setConfigKeys = (state, { configKeys }): ConfigKeyType => updateState(state, { configKeys });

const setRegion = (state, { activeRegion }): ActiveRegionType => updateState(state, { activeRegion });

const setPageUrl = (state, { pageUrl }): ActiveRegionType => updateState(state, { pageUrl });

const setRoute = (state, { pathname }): RouteType => updateState(state, { route: pathname });

const setPageQuery = (state, { pageQuery }) => updateState(state, { pageQuery });

const setAuthentication = (state, { sessionInfo }) => updateState(state, { sessionInfo });

const setUserState = (state, { userState }) => {
  if (userState === USER_STATE_LOGGED_IN) setCookie('lastLogin', new Date());
  return updateState(state, { userState });
};

const setPageOrigin = (state, { origin }) => updateState(state, { pageOrigin: origin });

export default (state = initState, action: GlobalType = '') => {
  switch (action.type) {
    case DEVICE_TYPE:
      return setDevice(state, (action: DeviceType));
    case IS_TABLET:
      return setIsTablet(state, action);
    case REGION_TYPE:
      return setRegion(state, action);
    case CONFIG_KEYS:
      return setConfigKeys(state, action);
    case CURRENT_ROUTE:
      return setRoute(state, action);
    case PAGE_URL:
      return setPageUrl(state, action);
    case PAGE_QUERY:
      return setPageQuery(state, action);
    case CHECK_AUTH_SUCCESS:
      return setAuthentication(state, action);
    case SET_USER_STATE:
      return setUserState(state, action);
    case PAGE_ORIGIN:
      return setPageOrigin(state, action);
    default:
      return state;
  }
};
