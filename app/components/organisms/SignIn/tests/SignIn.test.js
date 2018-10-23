import 'jest-styled-components';
import { fromJS } from 'immutable';
import { ThemeProvider } from 'styled-components';
import { takeLatest } from 'redux-saga/effects';
import { shallow } from 'enzyme';
import SignInStyled, { SignInVanilla } from '../SignIn';
import Button from '../../../atoms/Button/Button';
import Input from '../../../atoms/Input';
import signSaga, { userSignIn } from '../SignIn.saga';
import { failureSignIn, requestSignIn } from '../SignIn.actions';
import { SIGNIN_FAILURE, SIGNIN_REQUEST } from '../SignIn.constants';
import Theme from '../../../../styles/theme/';


const stepper = fn => mock => fn.next(mock).value;

const props = {
  submitHandler: jest.fn(),
  signInError: fromJS({}),
};

describe('SignIn with styles', () => {
  it('create snapshot with theme', () => {
    const signIn = shallow(<ThemeProvider theme={Theme}><SignInStyled /></ThemeProvider>);
    expect(signIn).toMatchSnapshot();
  });
});

describe('SignIn Component ', () => {
  let signIn;
  beforeEach(() => {
    signIn = shallow(<SignInVanilla {...props} />);
  });
  test('should perform form submit and set submit state true', () => {
    signIn.setState({
      email: {
        value: 'test@test.com',
        isValid: true,
      },
      password: {
        value: 'test123TEST',
        isValid: true,
      },
    });
    const form = signIn.find('form').at(0);
    form.simulate('submit', { preventDefault: () => {} });
    expect(signIn.state().password.isValid).toEqual(true);
  });

  test('should receieve new props ', () => {
    signIn.setState({
      email: {
        value: 'test@test.com',
        isValid: true,
      },
      password: {
        password: 'test123TEST',
        isValid: true,
      },
      submitted: true,
    });
    signIn.setProps({
      signInError: fromJS({
        failure: [{
          errorCode: 'currentPassword',
          message: 'password doesnt match with email please re-check your password',
        },
        {
          errorCode: 'loginFormError',
          message: 'test login error',
        }],
      }),
    });
    signIn.update();
    expect(signIn.state().password.errorMessage).toEqual('password doesnt match with email please re-check your password');
  });
  test('should render with error true ', () => {
    const form = signIn.find('form').at(0);
    form.simulate('submit', { preventDefault: () => {} });
    expect(signIn.state().email.isError).toEqual(true);
  });
  test('should render with error false and state have email and password  ', () => {
    signIn.setState({
      email: { email: 'test@test.com', value: 'test@test.com' },
      password: { password: 'test123TEST', value: 'test123TEST' },
    });
    const button = signIn.find(Button).at(1);
    button.simulate('click', { preventDefault: () => {} });
    expect(signIn.state().email.value).toEqual('test@test.com');
    expect(signIn.state().password.value).toEqual('test123TEST');
    expect(signIn.state().email.isError).not.toBeDefined();
    expect(signIn.state().password.isError).not.toBeDefined();
  });

  test('should validate email and set error false if email is correct   ', () => {
    const event = { target: { name: 'test', value: 'test@test.com', type: 'email' } };
    const input = signIn.find(Input).at(0);
    input.simulate('change', event);
    input.simulate('blur');
    expect(signIn.state().email.value).toEqual('test@test.com');
    expect(signIn.state().email.isError).toEqual(false);
  });
  test('should validate email and set error true if email is not correct   ', () => {
    const event = { target: { name: 'test', value: 'test', type: 'email' } };
    const input = signIn.find(Input).at(0);
    input.simulate('change', event);
    input.simulate('blur');
    expect(signIn.state().email.value).toEqual('test');
    expect(signIn.state().email.isError).toEqual(true);
  });
  test('should validate password and set error false if password is correct   ', () => {
    const event = { target: { name: 'test', value: 'test12Password', type: 'password' } };
    const input = signIn.find(Input).at(1);
    input.simulate('change', event);
    input.simulate('blur');
    expect(signIn.state().password.value).toEqual('test12Password');
    expect(signIn.state().password.isError).toEqual(false);
  });
  test('should validate password and set error true if password is not correct   ', () => {
    const event = { target: { name: 'test', value: 'testpassword', type: 'password' } };
    const input = signIn.find(Input).at(1);
    input.simulate('change', event);
    input.simulate('blur');
    expect(signIn.state().password.value).toEqual('testpassword');
    expect(signIn.state().password.isError).toEqual(true);
  });
  test('should validate email and set error true if email is blank   ', () => {
    const event = { target: { name: 'test', value: '', type: 'email' } };
    const input = signIn.find(Input).at(0);
    input.simulate('change', event);
    input.simulate('blur');
    expect(signIn.state().email.isError).toEqual(true);
  });
  test('should validate password and set error true if password is blank   ', () => {
    const event = { target: { name: 'test', value: '', type: 'password' } };
    const input = signIn.find(Input).at(1);
    input.simulate('change', event);
    input.simulate('blur');
    expect(signIn.state().password.isError).toEqual(true);
  });
});

describe('SignIn action  ', () => {
  let action;
  test('should return action type failure with data error  ', () => {
    action = failureSignIn('test error');
    expect(action.error).toEqual('test error');
    expect(action.type).toEqual(SIGNIN_FAILURE);
  });
  test('should return action type SIGNIN REQUEST with request data  ', () => {
    action = requestSignIn('test request data');
    expect(action.requestData).toEqual('test request data');
    expect(action.type).toEqual(SIGNIN_REQUEST);
  });
});

describe('SignIn saga testing ', () => {
  let step;
  beforeEach(() => {
    step = stepper(signSaga());
  });

  test('should work SIGNIN_REQUEST correctly', () => {
    expect(step()).toEqual(takeLatest(SIGNIN_REQUEST, userSignIn));
  });
});
