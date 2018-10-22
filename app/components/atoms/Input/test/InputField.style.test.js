import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Input from '../';
import Theme from '../../../../styles/theme';
import { DESKTOP } from '../../../../constants';

const theme = {
  ...Theme,
  deviceType: DESKTOP,
};

describe('Input', () => {
  let input = '';
  const props = {
    deviceType: DESKTOP,
  };

  beforeEach(() => {
    input = renderer.create(<Input id="test" {...props} theme={theme} />).toJSON();
  });

  test('should render correctly', () => {
    expect(input).toMatchSnapshot();
  });
});
