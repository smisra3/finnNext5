// @flow
import { PureComponent } from 'react';
import Router from 'next/router';
import styled from 'styled-components';
import get from 'lodash/get';
import Layout from '../Layout';
import enhance from '../../../lib/dynamicStore';
import SignInContainer from '../../organisms/SignIn';
import reducer from './LoginPage.reducer';
import saga from './LoginPage.saga';
import initialActions from './LoginPage.action';
import styles from './LoginPage.style';
import { MY_ACCOUNT } from '../../../routes';
import HeadTag from '../../atoms/HeadTag';
import { loginPageMetaLabels, metaInfo } from './LoginPage.static.data';

class Login extends PureComponent<any, any> {
  static getInitialProps = ({ res, isServer, store }: any) => {
    const isUserLoggedIn = get(store.getState(), [
      'global',
      'globalData',
      'sessionInfo',
      'isUserLoggedIn',
    ]);
    if (isUserLoggedIn) {
      if (isServer) {
        res.redirect(MY_ACCOUNT);
      }
    }
  };

  sendToMyAccount = (defaultRoute) => {
    Router.replace({ pathname: MY_ACCOUNT, query: { page: defaultRoute } }, `${MY_ACCOUNT}`).then(() => {
      window.scrollTo(0, 0);
    });
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { isUserLoggedIn } = this.props;
    if (prevProps.isUserLoggedIn !== isUserLoggedIn) {
      if (isUserLoggedIn) {
        this.sendToMyAccount(MY_ACCOUNT);
      }
    }
  }

  render() {
    const { className } = this.props;
    return (
      <Layout title="SIGN IN">
        <div className={className}>
          <HeadTag
            description={loginPageMetaLabels.loginPageTitleText}
            image="image"
            title={loginPageMetaLabels.loginPageTitleText}
            url="canonical url"
            siteName={metaInfo.SITE_NAME}
            card="card"
          />
          <h1 className="visually-hidden">{loginPageMetaLabels.loginPageTitleText}</h1>
          <section className="login-container" />
        </div>
      </Layout>
    );
  }
}

/* istanbul ignore next */
const mapStateToProps = (state: Map): MapStateToProps => ({
  data: get(state, ['global']),
  deviceType: get(state, ['global', 'globalData', 'deviceType']),
  activeBrand: get(state, ['global', 'globalData', 'activeBrand']),
  isUserLoggedIn: get(state, ['global', 'globalData', 'sessionInfo', 'isUserLoggedIn']),
});

/* istanbul ignore next */
const mapDispatchToProps = (dispatch): void => ({});

const LoginStyled = styled(Login)`
  ${styles};
`;

export default enhance(LoginStyled, {
  key: 'login',
  reducer,
  saga,
  initialActions,
  mapStateToProps,
  mapDispatchToProps,
});

export { Login as LoginVanilla };
