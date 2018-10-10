// @flow
import { DEVICE_TYPE, REGION_TYPE, CONFIG_KEYS, CURRENT_ROUTE } from '../constants';

export type DeviceTypeType = {
  type: typeof DEVICE_TYPE,
  deviceType: string,
};

export type setIsTabletType = {
  type: string,
  isTablet: boolean,
};

export type ActiveRegionType = {
  type: typeof REGION_TYPE,
  activeRegion: string,
  deviceType: string,
  userState: string,
};

export type ConfigKeyType = {
  type: typeof CONFIG_KEYS,
  configKeys: {},
};

export type RouteType = {
  type: typeof CURRENT_ROUTE,
  pathname: string,
};

export type getLabelsType = {
  type: string,
  data: object,
}

export type GlobalType = DeviceTypeType | ActiveRegionType | RouteType | setIsTabletType | getLabelsType;
