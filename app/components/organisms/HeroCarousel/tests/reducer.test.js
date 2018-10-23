
import { fromJS } from 'immutable';
import heroCarouselReducer from '../HeroCarousel.reducer';

describe('heroCarouselReducer', () => {
  test('returns the initial state', () => {
    expect(heroCarouselReducer(undefined, {})).toEqual(fromJS({}));
  });
});
