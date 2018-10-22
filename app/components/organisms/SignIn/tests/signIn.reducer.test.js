import { fromJS } from 'immutable';
import reducer from '../../SignIn/SignIn.reducer';
import { SIGNIN_FAILURE } from '../SignIn.constants';
import {
  forgotSubmitSuccessAction,
  forgotSubmitFailureAction,
  forgotResetAction,
  failure,
} from '../SignIn.actions';

describe('SignIn Reducer Tests', () => {
  const minState = fromJS({
    error: null,
  });
  test('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(minState);
  });

  test('should load SIGNIN_FAILURE data', () => {
    const action = {
      type: SIGNIN_FAILURE,
      error: null,
    };
    const state = reducer(undefined, action);
    expect(state.get('error')).toEqual(null);
  });
});

const initialState = fromJS({
  error: null,
});

describe('Describe reducers', () => {
  test('should return intial state as it is when action type dont match', () => {
    const state = reducer(undefined, { type: 'sample' });
    expect(state).toEqual(initialState);
  });

  test('should return failure state', () => {
    const action = failure({ error: 'test error' });
    const state = reducer(initialState, action);
    expect(state.getIn(['failure', 'error'])).toEqual('test error');
  });
  test('should return GC rewards error state with test error and reset state ', () => {
    const action = forgotSubmitFailureAction({ error: 'test error' });
    const state = reducer(initialState, action);
    expect(state.getIn(['forgotResponse']).error).toEqual('test error');
    const nextAction = forgotResetAction();
    const nextState = reducer(initialState, nextAction);
    expect(nextState.getIn(['forgotResponse'])).toEqual({});
  });

  test('should return GC rewards error state with test error and reset state ', () => {
    const action = forgotSubmitSuccessAction({ status: 'SUCCESS' });
    const state = reducer(initialState, action);
    expect(state.getIn(['forgotResponse']).status).toEqual('SUCCESS');
  });
});
