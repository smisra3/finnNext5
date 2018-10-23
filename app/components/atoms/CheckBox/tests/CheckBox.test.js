import { shallow } from 'enzyme';
import 'jest-styled-components';
import CheckBoxStyle, { CheckBoxVanilla as CheckBox } from '../CheckBox';
import { ButtonVanilla } from '../../Button/Button';


describe('CheckBox Component with style ', () => {
  test('should render correctly with styles', () => {
    let checkBox = '';
    checkBox = shallow(<CheckBoxStyle />);
    expect(checkBox).toMatchSnapshot();
  });
});

describe('CheckBox Component ', () => {
  test('should render correctly', () => {
    let checkBox = '';
    checkBox = shallow(<CheckBox />);
    expect(checkBox).toMatchSnapshot();
  });
  test('should render checkbox checked', () => {
    const checkBoxChecked = shallow(<CheckBox isChecked />);
    expect(checkBoxChecked).toMatchSnapshot();
  });
  test('should render checkbox without label', () => {
    const checkBoxChecked = shallow(<CheckBox hideLabel />);
    expect(checkBoxChecked).toMatchSnapshot();
  });
  test('should trigger focus event', () => {
    const checkBoxChecked = shallow(<CheckBox hideLabel />);
    checkBoxChecked.find('input').simulate('focus');
    expect(checkBoxChecked.state().isFocused).toEqual(true);
  });

  test('should trigger blur State', () => {
    const checkBoxChecked = shallow(<CheckBox hideLabel />);
    checkBoxChecked.find('input').simulate('blur');
    expect(checkBoxChecked.state().isFocused).toEqual(false);
  });

  test('should render string label when createLabelField is invoked with hideLabel="true"', () => {
    const checkBoxChecked = shallow(<CheckBox hideLabel label="abc" />);
    expect(checkBoxChecked.containsMatchingElement(<span className="label-field is-hidden">abc</span>)).toBe(true);
  });

  test('should render string field label when createLabelField is invoked hideLabel="false"', () => {
    const checkBoxChecked = shallow(<CheckBox label={ButtonVanilla} />);
    expect(checkBoxChecked.find(ButtonVanilla)).toHaveLength(1);
  });
});
