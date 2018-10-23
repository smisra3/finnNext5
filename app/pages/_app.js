import App, { Container } from 'next/app';
import { END } from 'redux-saga';
import React from 'react';
import withRedux from 'next-redux-wrapper';
import { Provider } from 'react-redux';
import configureStore, { injectPageSagaReducer } from '../lib/dynamicStore/configureStore';
import { PageMap } from '../constants';

const dynamicImport = (name) => {
  switch (name) {
    case 'HomePage':
      return import('../components/templates/HomePage/HomePage.exporter.js');
  }
};

const configureStoreApp = (initialState = {}) => {
  const store = configureStore({
    initialState,
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
      const config = pageConfig.default;
      const { reducer, saga, key } = config;

      await injectPageSagaReducer({
        store,
        key,
        reducer,
        saga,
      });

      if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps({ ...ctx });
      }
    }
    return { pageProps };
  }

  render() {
    const { Component, store } = this.props;
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
