import React from 'react';
import Head from 'next/head';

import Header from './header';
import Footer from './footer';
import Main from './main';

export default ({ children, title = 'DRE' }) => (
  <React.Fragment>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    <Main>{children}</Main>
    <Footer />
  </React.Fragment>
);
