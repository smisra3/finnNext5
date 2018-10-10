//  @flow
import type { Map } from 'immutable';
import { FAILURE, SIGNIN_REQUEST } from '../../SignIn/SignIn.constants';

export type Props = {
  className: string,
};

export type State = {
  submitted: boolean,
  userName: {
    value: string,
    isList: boolean,
    errorMessage: string,
  },
  password: {
    isPassword: boolean,
    value: string,
    isList: boolean,
    errorMessage: string,
  },
  isValidUserName: boolean,
};

export type mapDispatchToProps = {
  requestSignIn: () => void,
};

export type MapStateToProps = {
  signInData: Map,
};

export type failureAction = () => { type: typeof FAILURE, data: Map };
export type signInRequestAction = () => { type: typeof SIGNIN_REQUEST, data: Map };
