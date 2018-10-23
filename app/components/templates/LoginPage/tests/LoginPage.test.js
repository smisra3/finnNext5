import { shallow } from 'enzyme';
import { LoginVanilla } from '../LoginPage';
import { MOBILE, DESKTOP } from '../../../../constants';
import ForgotPassword from '../../../molecules/ForgotPassword';
import SignIn from '../../../organisms/SignIn';

const props = {
  deviceType: MOBILE,
  forgotReset: jest.fn(),
  forgotSubmit: jest.fn(),
};

describe('SignIn Component', () => {
  let signIn = '';
  test('should render correctly', () => {
    signIn = shallow(<LoginVanilla {...props} />);
    expect(signIn).toMatchSnapshot();
  });

  test('should render correctly', () => {
    props.deviceType = DESKTOP;
    signIn = shallow(<LoginVanilla {...props} />);
    expect(signIn).toMatchSnapshot();
  });

  test('Should trigger showForgetModal', () => {
    const shallowComponent = shallow(<LoginVanilla {...props} />);
    const spy = jest.spyOn(shallowComponent.instance(), 'showForgetModal');
    shallowComponent.setState({ visibleforgetModal: true });
    shallowComponent.find(SignIn).prop('showForgetModal')();
    expect(spy).toHaveBeenCalled();
  });
  test('Should trigger forgotSubmit', () => {
    const shallowComponent = shallow(<LoginVanilla {...props} />);
    const spy = jest.spyOn(shallowComponent.instance(), 'forgotSubmit');
    shallowComponent.setState({ visibleforgetModal: true });
    shallowComponent.find(ForgotPassword).prop('forgotSubmit')('test@test.com');
    expect(spy).toHaveBeenCalled();
  });
  test('Should trigger hideForgotModal', () => {
    const shallowComponent = shallow(<LoginVanilla {...props} />);
    const spy = jest.spyOn(shallowComponent.instance(), 'hideForgotModal');
    shallowComponent.setState({ visibleforgetModal: true });
    shallowComponent.find(ForgotPassword).prop('closeModal')();
    expect(spy).toHaveBeenCalled();
  });
});
