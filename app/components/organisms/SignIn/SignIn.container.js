// @flow
import { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import type { Props, State } from './types';
import { requestSignInAction, setErrorsAction, checkUserValidAction, updateLoginAction } from './SignIn.actions';
import SignIn from './SignIn';

const mapStateToProps = (state): MapStateToProps => ({
  data: _.get(state, ['global']),
  loginForm: _.get(state, ['global', 'signIn', 'loginForm']),
  isValidUser: _.get(state, ['global', 'signIn', 'isUserValid']),
  errorMessage: _.get(state, ['global', 'signIn', 'errorMessage']),
  isLoaderActive: _.get(state, ['global', 'signIn', "isLoaderActive"]),
  deviceType: _.get(state, ['global', 'globalData', 'deviceType']),
});

const mapDispatchToProps = (dispatch): void => ({
  checkUserValid: userID => dispatch(checkUserValidAction(userID)),
  submitHandler: userInputs => dispatch(requestSignInAction(userInputs)),
  resetError: () => dispatch(setErrorsAction({})),
  updateLoginHandler: (identifier, value) => dispatch(updateLoginAction(identifier, value))
});

const SignInContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignIn);

export default SignInContainer;