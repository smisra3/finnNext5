// @flow
import { Fragment, Component } from "react";
import styled from "styled-components";
import styles from "./SignIn.style";
import Button from "../../atoms/Button";
import Anchor from "../../atoms/Anchor";
import Input from "../../atoms/Input";
import CheckBox from "../../atoms/CheckBox";
import type { Props, State } from "./types";
import { loginPageLabels } from "../../../locales/en-US";
import { SUPPORT_PAGE } from "../../../routes";
import { checkValidity } from "../../../utils/validation";

const initialState = () => ({
  userNameControl: {
    errorMessage: "",
    rules: [{ required: true }, { minLength: 3 }]
  },
  passwordControl: {
    errorMessage: "",
    rules: [{ required: true }]
  },
  isRememberMeChecked: false,
  isFormSubmitted: false
});

/**
 * Signin Component.
 * This organism will be used for login user accounts.
 * This is state full component, It render a form containing input fields called user
 * Email and Password. There are multiple methods,
 * which handles the user interaction with input fields or validations.
 */
class SignIn extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.loginFormRef = React.createRef();

    /**
     * @type {object}
     * @property {boolean}  isPassword
     * @property {boolean}  isEmail
     * @property {boolean}  error
     * @property {boolean}  fieldLabelEmail
     * @property {boolean}  fieldLabelPassword
     * @property {string}  userName store input field for userName
     * @property {string}  password store input field for password
     */
    this.state = initialState();
  }

  checkUserValidHandler = () => {
    this.validateLoginForm();
    const { checkUserValid, loginForm } = this.props;
    if (loginForm.userName.trim() !== "") {
      checkUserValid(loginForm.userName);
    }
  };

  validateLoginForm = () => {};

  formSubmit = event => {
    event.preventDefault();
    const { submitHandler } = this.props;
    const { userName, password } = this.props.loginForm;
    this.setState({
      isFormSubmitted: true
    });
    submitHandler({
      userName: userName.value,
      password: password.value
    });
  };

  inputChangedHandler = (value, inputIdentifier) => {
    this.props.updateLoginHandler(inputIdentifier, value);
  };

  rememberMeHandler = e => {
    this.setState(prevState => ({
      isRememberMeChecked: !prevState.isRememberMeChecked
    }));
  };

  renderLoginForm = () => {
    const { userName, password } = this.props.loginForm;
    const { isValidUser, isLoaderActive } = this.props;
    const { userNameControl, passwordControl, isRememberMeChecked, isFormSubmitted } = this.state;
    const loginForm = (
      <div className="form-inner-wrapper">
        <Input
          labelContent={loginPageLabels.userNameLabel}
          key={"userName"}
          type="text"
          placeholder=""
          value={userName}
          errorMessage={userNameControl.errorMessage}
          onChange={event => this.inputChangedHandler(event.target.value, "userName")}
          onBlur={event => this.checkUserValidHandler()}
          data-slnm-id="userName"
          isParentSubmitted={isFormSubmitted}
        />
        <p className="login-info">{loginPageLabels.userNameCrnInfoMessage}</p>
        {isValidUser && (
          <Input
            labelContent={loginPageLabels.passwordLabel}
            key={"password"}
            type="password"
            placeholder=""
            value={password}
            errorMessage={passwordControl.errorMessage}
            onChange={event => this.inputChangedHandler(event.target.value, "password")}
            onBlur={event => this.inputChangedHandler(event.target.value, "password")}
            data-slnm-id="password"
          />
        )}
        <div className="bottom-gutter top-gutter">
          <CheckBox
            id="rememberMe"
            isChecked={isRememberMeChecked}
            label={loginPageLabels.rememberMeText}
            onChange={e => this.rememberMeHandler(e)}
          />
        </div>
        <div className="center-align">
          <Button
            loader={isLoaderActive}
            data-slnm-id="loginSubmit"
            className="login-form-submit"
            primary="true"
            fullWidth="true"
            type="submit"
          >
            {!isValidUser ? loginPageLabels.next : loginPageLabels.signInButtonTxt}
          </Button>
        </div>
      </div>
    );
    return loginForm;
  };

  /**
   * render method return markup.
   * Markup contains header h1 tag and form.
   * form has input fields, remember-me checkbox and submit button.
   * @return {ReactElement} markup
   */
  render() {
    const { className, errorMessage, heading } = this.props;
    return (
      <Fragment>
        <form
          className={`${className} sign-in`}
          onSubmit={event => this.formSubmit(event)}
          autoComplete="off"
          ref={this.loginFormRef}
        >
          <div className="help-support circular-buffer center-align">
            <p>
              {loginPageLabels.signInHelpText}{" "}
              <Anchor to={SUPPORT_PAGE}>{loginPageLabels.viewSupportPage}</Anchor>
            </p>
          </div>
          <div className="login-form circular-buffer">
            <h2 className="center-align">WELCOME ON BOARD</h2>
            <h2
              className="sign-in-heading circular-buffer center-align"
              data-slnm-id="signInHeading"
            >
              {heading || loginPageLabels.signInHeading}
            </h2>
            {errorMessage && errorMessage.length ? (
              <div className="response-error sign-in-error">
                <span className="error-message">{errorMessage}</span>
              </div>
            ) : null}
            {this.renderLoginForm()}
          </div>
          <div className="registration-and-info">
            <div className="registration circular-buffer center-align">
              <Anchor secondary="true" to="https://www.finnair.com/gb/gb/corporate/enrollment">
                {loginPageLabels.registerForOnlineAccess}
              </Anchor>
            </div>
            <hr />
            <div className="information circular-buffer">
              <p className="margin-0">
                <strong>{loginPageLabels.importantInformation}</strong>
                {loginPageLabels.importantInformationDetails}
              </p>
            </div>
            <hr />
          </div>
        </form>
      </Fragment>
    );
  }
}

const styledSignIn = styled(SignIn)`
  ${styles};
`;

export default styledSignIn;
