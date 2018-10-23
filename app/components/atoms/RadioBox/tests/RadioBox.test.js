import { shallow, mount } from 'enzyme';
import RadioBoxStyle, { RadioBox } from '../RadioBox';

const props = {
  onChecked: jest.fn(),
  onFocus: true,
};

describe('RadioBox Component with style ', () => {
  test('should render correctly with styles', () => {
    let checkBox = '';
    checkBox = shallow(<RadioBoxStyle />);
    expect(checkBox).toMatchSnapshot();
  });
});

describe('RadioBox Component ', () => {
  test('should render correctly', () => {
    let checkBox = '';
    checkBox = shallow(<RadioBox />);
    expect(checkBox).toMatchSnapshot();
  });
  test('should render checkbox checked', () => {
    const checkBoxChecked = shallow(<RadioBox isChecked />);
    expect(checkBoxChecked).toMatchSnapshot();
  });
  test('should render checkbox without label', () => {
    const checkBoxChecked = shallow(<RadioBox hideLabel />);
    expect(checkBoxChecked).toMatchSnapshot();
  });
  test('should trigger Toggle State', () => {
    const checkBoxChecked = shallow(<RadioBox hideLabel {...props} />);
    jest.spyOn(checkBoxChecked.instance(), 'toggleState');
    checkBoxChecked.find('input').simulate('change');
  });
  test('should trigger focus event', () => {
    const checkBoxChecked = shallow(<RadioBox hideLabel />);
    checkBoxChecked.find('input').simulate('focus');
    expect(checkBoxChecked.state().isFocused).toEqual(true);
  });

  test('should trigger blur State', () => {
    const checkBoxChecked = shallow(<RadioBox hideLabel />);
    checkBoxChecked.find('input').simulate('blur');
    expect(checkBoxChecked.state().isFocused).toEqual(false);
  });

  test('should mount', () => {
    const checkBoxChecked = mount(<RadioBox hideLabel />);
    checkBoxChecked.setState({ checked: true });
    checkBoxChecked.instance().componentWillReceiveProps({ isChecked: true });
    expect(checkBoxChecked).toMatchSnapshot();
  });

  test('should mount', () => {
    const checkBoxChecked = shallow(<RadioBox hideLabel />);
    checkBoxChecked.setState({ checked: true });
    checkBoxChecked.instance().componentWillReceiveProps({ isChecked: true });
    expect(checkBoxChecked).toMatchSnapshot();
  });
});
