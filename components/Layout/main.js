import React from 'react';
import styled from 'styled-components';

const MainWrapper = styled.section`
  .container {
    max-width: 1024px;
    margin: 0 auto;
  }
`;

const Main = ({ children }) => (
  <MainWrapper>
    <div className="container">{children}</div>
  </MainWrapper>
);

export default Main;
