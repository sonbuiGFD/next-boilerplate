import React from 'react';
import { connect } from 'react-redux';
import Layout from 'components/Layout';
// import s from './style.scss';

const User = () => (
  <Layout>
    <h1>this is user page</h1>
  </Layout>
);
const mapDispatchToProps = {};

const mapStateToProps = (props, ownProps) => ({
  ...ownProps,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(User);
