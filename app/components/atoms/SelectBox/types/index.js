// @flow

import type { Map } from 'immutable';

export type Props = {
  className: string,
  default: string,
  labelledById: string,
  onSelect: Function,
  options: Map,
  isNative: boolean,
  showLabel?: Boolean,
};

export type State = {
  value: string,
};
