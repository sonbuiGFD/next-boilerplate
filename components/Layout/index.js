import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

export default ({ children, title = 'DRE' }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        |
        <Link href="/chat1">
          <a target="_blank">chat1</a>
        </Link>
        |
        <Link href="/chat2">
          <a target="_blank">chat2</a>
        </Link>
        |
        <Link href="/user">
          <a>user</a>
        </Link>
      </nav>
    </header>
    {children}
    <footer>I`m here to stay</footer>
  </div>
);
