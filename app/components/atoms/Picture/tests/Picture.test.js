
import { shallow } from 'enzyme';
// import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Picture from '../index';

describe('<Picture />', () => {

  let PictureComponent = '';
  beforeEach(() => {
    PictureComponent = shallow(<Picture>Test</Picture>);
  });

  test('should render correctly', () => {
    expect(PictureComponent).toMatchSnapshot();
  });

});