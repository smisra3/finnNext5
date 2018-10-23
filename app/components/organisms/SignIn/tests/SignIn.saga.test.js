import { call, put } from 'redux-saga/effects';
import API from '../../../../utils/fetch';
import { API_URLS } from '../../../../constants/api/url';
import { buildUrl } from '../../../../utils/utils';
import { SIGNIN, SIGNUP } from '../../../../locales/en-US';

import { userSignIn, userSignUp, forgotSubmitSaga } from '../SignIn.saga';
import { stepper } from '../../../../utils/testUtil';
import { STATUS_ERROR } from '../../../../constants';
import {
  showSignInLoading,
  showSignUpLoading,
  forgotSubmitFailureAction,
  forgotSubmitSuccessAction,
  hideForgotLoading,
} from '../SignIn.actions';

describe('load Edit Cart functional testing ', () => {
  test('Signin Saga API test', () => {
    const action = {
      requestData: {
        api: SIGNIN,
      },
    };
    const step = stepper(userSignIn(action));
    step();
    expect(step()).toEqual(put(showSignInLoading()));
    expect(step()).toEqual(call(API.fetch, `${API_URLS.loginAccount}`, action, {
      method: 'POST',
      data: action.requestData.body,
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
      },
    }));
    const data = {};
    data.status = true;
    step(data);
  });

  describe('singnUp saga API test', () => {
    const action = {
      requestData: {
        api: SIGNUP,
      },
    };
    test('should trigger edit product data', () => {
      const step = stepper(userSignUp(action));
      step();
      expect(step()).toEqual(put(showSignUpLoading()));
      expect(step()).toEqual(call(API.fetch, `${API_URLS.createAccount}`, action, {
        method: 'POST',
        data: action.requestData.body,
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
        },
      }));
      const data = {};
      data.status = STATUS_ERROR;
      step(data);
    });
  });
});

describe('forgot Password Saga', () => {
  const applyAction = {
    data: {
      emailAddress: 'll@ll.com',
    },
  };
  const query = buildUrl({ pathname: '', query: applyAction.data }).split('?')[1];
  const callForgotSubmit = call(API.fetch, API_URLS.forgotPassword, applyAction, {
    method: 'POST',
    data: query,
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
    },
  });

  test('should call callForgotSubmit when email is not existing in database', () => {
    const step = stepper(forgotSubmitSaga(applyAction));

    expect(step()).toEqual(callForgotSubmit);
    const response = {
      status: 'ERROR',
      failure: [
        {
          message: 'This email does not exist as an account. Please re-enter.',
          errorCode: 'emailAddress',
        },
      ],
    };
    const obj = { status: false, message: response.failure[0].message };
    expect(step(response)).toEqual(put(hideForgotLoading()));
    expect(step(response)).toEqual(put(forgotSubmitFailureAction(obj)));
  });

  test('should call callForgotSubmit when email is valid', () => {
    const step = stepper(forgotSubmitSaga(applyAction));

    expect(step()).toEqual(callForgotSubmit);
    const response = {
      status: 'SUCCESS',
      email: 'lguglani@publicisgroupe.net',
    };
    const obj = { status: true, message: '' };
    expect(step(response)).toEqual(put(hideForgotLoading()));
    expect(step(response)).toEqual(put(forgotSubmitSuccessAction(obj)));
  });

  // describe('forgotSaga method test', () => {
  //   let step;
  //   beforeEach(() => {
  //     step = stepper(forgotSaga());
  //   });
  //   test('should FORGOT_SUBMIT', () => {
  //     expect(step()).toEqual(takeLatest(FORGOT_SUBMIT, forgotSubmitSaga));
  //   });
  // });
});
