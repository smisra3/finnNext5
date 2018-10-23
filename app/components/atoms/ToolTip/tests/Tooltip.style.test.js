import { shallow } from 'enzyme';
import Tooltip from '../';
import { DESKTOP } from '../../../../constants';
import Theme from '../../../../styles/theme';
import { props } from './ToolTip.test';

const theme = { ...Theme };

describe('Tooltip Component', () => {
  test('should render with desktop styles correctly and match snapshot', () => {
    theme.deviceType = DESKTOP;
    const miniCart = shallow(<Tooltip theme={theme} {...props} />);
    expect(miniCart).toMatchSnapshot();
  });
});
