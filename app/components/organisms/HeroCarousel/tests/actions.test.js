
import {
  defaultAction,
} from '../HeroCarousel.actions';
import {
  DEFAULT_ACTION,
} from '../HeroCarousel.constants';

describe('HeroCarousel actions', () => {
  describe('Default Action', () => {
    test('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: DEFAULT_ACTION,
      };
      expect(defaultAction()).toEqual(expected);
    });
  });
});
