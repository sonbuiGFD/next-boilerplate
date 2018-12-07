import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const HeaderWrapper = styled.header`
  .container {
    max-width: 1024px;
    margin: 0 auto;
  }
`;

const Header = () => (
  <HeaderWrapper>
    <div className="container">
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
    </div>
  </HeaderWrapper>
);

export default Header;
