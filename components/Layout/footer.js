import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  .container {
    max-width: 1024px;
    margin: 0 auto;
  }
`;

const Footer = () => (
  <FooterWrapper>
    <div className="container"> this is main page footer</div>
  </FooterWrapper>
);

export default Footer;
