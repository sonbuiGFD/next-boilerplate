import React from 'react';
import { connect } from 'react-redux';
import Layout from 'components/Layout';

const Home = () => (
  <Layout>
    <h1>this is home page</h1>
  </Layout>
);

export default connect(undefined)(Home);
