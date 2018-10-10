// @flow
import { PureComponent } from "react";
import Router from "next/router";
import enhance from "../../../lib/dynamicStore";
import initialActions from "./AccountSummary.actions";
import saga from "./AccountSummary.saga";
import reducer from "./AccountSummary.reducer";
import AccountSummaryTemplate from "./AccountSummary";
import { makeUserStateSelector, makeLabelsSelector } from "./AccountSummary.selectors";
import { LOGIN } from "../../../routes";
import { USER_STATE_LOGGED_IN } from "../../../global/constants";

class AccountSummaryContainer extends PureComponent<any, any> {
  componentDidMount() {
    this.checkUserStatus();
  }

  checkUserStatus = () => {
    const { userState } = this.props;
    if (!userState || !userState.userId) {
      this.sendToLogin(LOGIN);
    }
  };

  componentDidUpdate() {
    this.checkUserStatus();
  }

  sendToLogin = defaultRoute => {
    Router.replace({ pathname: LOGIN, query: { page: defaultRoute } }, `${LOGIN}`).then(() => {
      window.scrollTo(0, 0);
    });
  };

  render() {
    return <AccountSummaryTemplate {...this.props} />;
  }
}

const makeMapStateToProps = () => state => ({
  userState: makeUserStateSelector()(state),
  labels: makeLabelsSelector()(state)
});

export default enhance(AccountSummaryContainer, {
  key: "accountSummaryPage",
  mapStateToProps: makeMapStateToProps,
  initialActions,
  saga,
  reducer
});
