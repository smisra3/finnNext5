import { mount, shallow } from 'enzyme';
import SelectBox, { SelectBoxVanilla } from '../SelectBox';
import {
  MOBILE,
  DESKTOP,
  KEY_UP_CODE,
  KEY_DOWN_CODE,
  KEY_ENTER,
  KEY_TAB,
} from '../../../../constants';
import Theme from '../../../../styles/theme';

const theme = { ...Theme };

describe('Select Box Component', () => {
  const props = {
    deviceType: DESKTOP,
    selected: false,
    className: 'custom-drop-down',
    options: [
      {
        value: '1',
        label: 'label',
      },
    ],
  };

  test('should trigger change event in custom dropdown', () => {
    const selectBoxStyled = mount(<SelectBoxVanilla {...props} theme={theme} />);
    selectBoxStyled.setState({ dropDownOpen: true });
    const dropDownClick = jest.spyOn(selectBoxStyled.instance(), 'dropDownClick');
    selectBoxStyled.find('li').simulate('click');
    expect(dropDownClick).toHaveBeenCalled();
  });

  test('should trigger key down event in custom dropdown', () => {
    const selectBoxStyled = mount(<SelectBoxVanilla {...props} theme={theme} />);
    selectBoxStyled.setState({ dropDownOpen: true });
    const childKeyDown = jest.spyOn(selectBoxStyled.instance(), 'keyDown');
    selectBoxStyled.find('li').simulate('keyDown');
    expect(childKeyDown).toHaveBeenCalled();
  });

  test('should trigger label click on if click in span custom dropdown', () => {
    const selectBoxStyled = mount(<SelectBoxVanilla {...props} theme={theme} />);
    selectBoxStyled.setState({ dropDownOpen: true });
    const labelClick = jest.spyOn(selectBoxStyled.instance(), 'labelClick');
    selectBoxStyled.find('div > span').simulate('click');
    expect(labelClick).toHaveBeenCalled();
  });

  test('should clear label of custom dropdown ', () => {
    props.isClearLabel = true;
    const selectBoxStyled = mount(<SelectBoxVanilla {...props} theme={theme} />);
    selectBoxStyled.setState({ isSelected: true });
    const labelClick = jest.spyOn(selectBoxStyled.instance(), 'labelClick');
    selectBoxStyled.find('div > span').simulate('click');
    expect(labelClick).toHaveBeenCalled();
  });

  test('should trigger label click on if KEY_ESCAPE is pressed in custom dropdown', () => {
    const selectBoxStyled = mount(<SelectBoxVanilla {...props} theme={theme} />);
    const event = { which: 27 };
    selectBoxStyled.setState({ dropDownOpen: true });
    const keyDown = jest.spyOn(selectBoxStyled.instance(), 'keyDown');
    selectBoxStyled.find('div > span').simulate('keyDown', event);
    expect(keyDown).toHaveBeenCalled();
  });
  test('should trigger label click on if KEY_TAB is pressed in custom dropdown', () => {
    const event = {
      which: KEY_TAB,
    };
    const selectBoxStyled = mount(<SelectBoxVanilla {...props} theme={theme} />);
    selectBoxStyled.setState({ dropDownOpen: true });
    const keyDown = jest.spyOn(selectBoxStyled.instance(), 'keyDown');
    selectBoxStyled.find('li').simulate('keyDown', event);
    expect(keyDown).toHaveBeenCalled();
  });
  test('should trigger label click on if KEY_UP is pressed in custom dropdown', () => {
    const selectBoxStyled = mount(<SelectBoxVanilla {...props} theme={theme} />);
    const event = {
      which: KEY_UP_CODE,
    };
    selectBoxStyled.setState({ dropDownOpen: true });
    const keyDown = jest.spyOn(selectBoxStyled.instance(), 'keyDown');
    selectBoxStyled.find('div > span').simulate('keyDown', event);
    expect(keyDown).toHaveBeenCalled();
  });

  test('should trigger label click on if KEY_DOWN is pressed in custom dropdown', () => {
    const selectBoxStyled = mount(<SelectBoxVanilla {...props} theme={theme} />);
    const event = {
      which: KEY_DOWN_CODE,
    };
    selectBoxStyled.setState({ dropDownOpen: true });
    const keyDown = jest.spyOn(selectBoxStyled.instance(), 'keyDown');
    selectBoxStyled.find('div > span').simulate('keyDown', event);
    expect(keyDown).toHaveBeenCalled();
  });

  test('should trigger label click on if ENTER is pressed in custom dropdown', () => {
    const selectBoxStyled = mount(<SelectBoxVanilla {...props} theme={theme} />);
    const event = { which: KEY_ENTER };
    selectBoxStyled.setState({ dropDownOpen: true });
    const keyDown = jest.spyOn(selectBoxStyled.instance(), 'keyDown');
    selectBoxStyled.find('div > span').simulate('keyDown', event);
    expect(keyDown).toHaveBeenCalled();
  });

  test('should trigger blur if click outside of custom dropdown', () => {
    const selectBoxStyled = mount(<SelectBoxVanilla {...props} theme={theme} />);
    selectBoxStyled.setState({ dropDownOpen: true });
    const onBlur = jest.spyOn(selectBoxStyled.instance(), 'onBlur');
    selectBoxStyled.find('.custom-select-box').simulate('blur');
    expect(onBlur).toHaveBeenCalled();
  });

  test('should trigger label click on if keydown native dropdown', () => {
    props.deviceType = MOBILE;
    props.className = 'custom-class';
    const selectBoxStyled = mount(<SelectBoxVanilla {...props} />);
    const onChange = jest.spyOn(selectBoxStyled.instance(), 'onChange');
    selectBoxStyled.find('select').simulate('change');
    expect(onChange).toHaveBeenCalled();
  });
  test('should match the snapshot', () => {
    props.deviceType = MOBILE;
    const selectBoxStyled = mount(<SelectBoxVanilla {...props} theme={theme} />);
    expect(selectBoxStyled).toMatchSnapshot();
  });

  test('styled select box test', () => {
    theme.deviceType = DESKTOP;
    const selectBox = shallow(<SelectBox theme={theme} />);
    expect(selectBox).toMatchSnapshot();
  });
});
