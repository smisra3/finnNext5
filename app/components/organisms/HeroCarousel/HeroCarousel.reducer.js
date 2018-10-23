/*
 *
 * HeroCarousel reducer
 *
 */
// @flow
import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
} from './HeroCarousel.constants';

const initialState = fromJS({});

function heroCarouselReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default heroCarouselReducer;
