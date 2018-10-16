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

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const enhancers = [applyMiddleware(...middlewares)];
const composeEnhancers =
  process.env.NODE_ENV !== "production" && typeof window === "object"
    ? composeWithDevTools
    : compose;

class MyApp extends App {
  static async getInitialProps({ Component, routes, ctx }) {
    let pageProps;
    if (Component.getInitialProps) {
      pageProps = Component.getInitialProps({ ...ctx });
    }
    debugger;
    return { pageProps };
  }

  static configureStore(initialState = {}, pageConfig) {
    const store = createStore(
      createReducer(globalReducer),
      initialState,
      composeEnhancers(...enhancers)
    );

    store.runSaga = sagaMiddleware.run;
    return store;
  }

  render() {
    let { Component, store } = this.props;
    return (
      <Container>
        <Provider store={store}>
          <Component {...this.props} />
        </Provider>
      </Container>
    );
  }
}

export default withRedux(MyApp.configureStore)(MyApp);
