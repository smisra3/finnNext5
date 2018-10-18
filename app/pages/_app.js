import App, { Container } from "next/app";
import React from "react";
import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import withRedux from "next-redux-wrapper";
import withReduxSaga from "next-redux-saga";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import enhance from "../lib/dynamicStore/enhance";
import { withRouter } from "next/router";
import globalReducer from "../global/reducer";
import createReducer from "../lib/dynamicStore/reducers";
import configureStore from "../lib/dynamicStore/configureStore";
import saga from "../components/templates/HomePage/HomePage.saga";
import reducer from "../components/templates/HomePage/HomePage.reducer";

const configureStoreApp = (initialState = {}) => {
  const key = "homePage";
  const store = configureStore({
    key,
    saga,
    reducer,
    initialState
  });
  return store;
};

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps;
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ...ctx });
    }
    return { pageProps };
  }

  render() {
    let { Component, pageProps, store } = this.props;
    return (
      <Container>
        <Provider store={store}>
          <Component {...this.props} />
        </Provider>
      </Container>
    );
  }
}

export default withRedux(configureStoreApp)(MyApp);
