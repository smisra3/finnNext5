import { takeLatest, put, all } from 'redux-saga/effects';

import { failureStepper, stepper } from '../../../../utils/testUtil';

/* eslint-disable max-len */
import SignInTemplateSaga, { loadSignUpSlotSaga } from '../LoginPage.saga';
import { LOAD_SIGNUP_SLOT } from '../LoginPage.constant';
import { failure } from '../LoginPage.action';

describe('SignIn Saga', () => {
  test('Call SignInTemplateSaga', () => {
    const iterator = SignInTemplateSaga();
    const step = stepper(iterator);
    expect(step()).toEqual(all([takeLatest(LOAD_SIGNUP_SLOT, loadSignUpSlotSaga)]));
    expect(failureStepper(iterator)).toEqual(put(failure({})));
  });
});
