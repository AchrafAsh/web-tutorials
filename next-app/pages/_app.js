import App from 'next/app';
import Head from 'next/head';
import React, { Component } from 'react';
import { render } from 'react-dom';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>Next JS App</title>
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}
