import { shallow } from 'enzyme';
import 'jest-styled-components';

import List from '..';
import Theme from '../../../../styles/theme';
import { DESKTOP, MOBILE } from '../../../../constants';

describe('List', () => {
  let list = '';
  const theme = { ...Theme };

  test('should render correctly', () => {
    theme.deviceType = DESKTOP;
    list = shallow(<List theme={theme} />);
    expect(list).toMatchSnapshot();
  });

  test('should render correctly for mobile', () => {
    theme.deviceType = MOBILE;
    list = shallow(<List theme={theme} />);
    expect(list).toMatchSnapshot();
  });
});
