import App, { Container } from "next/app";
import { END } from "redux-saga";
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
import configureStore, { injectPageSagaReducer } from "../lib/dynamicStore/configureStore";
import { PageMap } from "../constants";

const dynamicImport = name => {
  switch (name) {
    case "HomePage":
      return import("../components/templates/HomePage/HomePage.exporter.js");
  }
};

const configureStoreApp = (initialState = {}) => {
  const store = configureStore({
    initialState
  });
  return store;
};

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps;
    const { pathname, store } = ctx;
    if (PageMap[pathname] !== undefined) {
      store.dispatch(END);
      const pagePath = PageMap[pathname];
      const pageConfig = await dynamicImport(pagePath);
      // Dynamic reducer and saga
      const reducer = pageConfig.default.reducer;
      const saga = pageConfig.default.saga;
      const key = pageConfig.default.key;

      await injectPageSagaReducer({
        store,
        key,
        reducer,
        saga
      });

      if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps({ ...ctx });
      }
      return { pageProps };
    }
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
