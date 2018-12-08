import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();

    const originalRenderPage = ctx.renderPage;
    ctx.renderPage = () => originalRenderPage({
        enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
      });

    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps, styles: [...initialProps.styles, ...sheet.getStyleElement()] };
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta charset="UTF-8" />
          <link href="//www.google-analytics.com" rel="dns-prefetch" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <meta name="description" content="Steenify development site" />
          <link href="/static/img/favicon.ico" rel="shortcut icon" />
          <link href="/static/img/favicon.ico" rel="apple-touch-icon-precomposed" />
          <link rel="stylesheet" href="/static/css/normalize.css" />
          <link rel="stylesheet" href="/static/vendor/bootstrap/css/bootstrap.min.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
