import { shallow } from 'enzyme';
import { InputVanilla as InputComponent } from '../Input';

/* eslint-disable max-len */
const props = {
  hideLabel: true,
  iconClass: 'iconClass',
  errorMessage: 'errorMessage',
  isError: true,
  onKeyUp: jest.fn(),
  onChange: jest.fn(),
  maxLength: 1,
  iconClickHandler: jest.fn(),
  dynamicPlaceholderLabel: true,
  placeholder: 'test',
  valid: true,
};

describe('Input Component', () => {
  let input = '';
  beforeEach(() => {
    input = shallow(<InputComponent {...props} />);
  });

  test('should render correctly', () => {
    expect(input).toMatchSnapshot();
  });

  test('should render correctly', () => {
    props.hideLabel = false;
    input = shallow(<InputComponent {...props} />);
    expect(input).toMatchSnapshot();
  });

  test('should render correctly', () => {
    props.iconClass = undefined;
    props.isError = false;
    input = shallow(<InputComponent {...props} />);
    expect(input).toMatchSnapshot();
  });

  test('should call keyup for add ', () => {
    const event = {
      target: {
        value: 'sss',
        parentElement: {},
      },
    };
    input.find('input').simulate('keyUp', event);
    expect(props.onKeyUp).toHaveBeenCalled();
  });

  test('should call keyup for remove', () => {
    const event = {
      target: { value: '', parentElement: {} },
    };
    input.find('input').simulate('change', event);
    expect(props.onChange).toHaveBeenCalled();
  });
});
