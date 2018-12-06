import React from 'react';
import { Provider } from 'react-redux';
import App, { Container } from 'next/app';
import io from 'socket.io-client';
import withRedux from 'next-redux-wrapper';
import { initStore } from 'store';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  state = {
    socket: null,
  };

  componentDidMount() {
    const socket = io();
    this.setState({ socket });
  }

  componentWillUnmount() {
    this.state.socket.close();
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Container>
        <Provider store={store}>
          <Component {...pageProps} socket={this.state.socket} />
        </Provider>
      </Container>
    );
  }
}

export default withRedux(initStore)(MyApp);
