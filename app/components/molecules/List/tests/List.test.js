import { shallow } from 'enzyme';
import { ListVanilla } from '../List';

describe('Button Component', () => {
  let list = '';
  beforeEach(() => {
    list = shallow(<ListVanilla />);
  });

  test('should render correctly', () => {
    expect(list).toMatchSnapshot();
  });
});
