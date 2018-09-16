import React, { Component } from 'react';
import Head from 'next/head';
import Header from '../utils/Header';
import NavBar from '../utils/NavBar';
import { withRouter } from 'next/router';

class Main extends Component {
  render() {
    const { router } = this.props;
    return (
      <div>
        <Head>
          <title>Users</title>

        </Head>
        <Header pathname={router.pathname} />
        <NavBar />
      </div>
    );
  }
}

export default withRouter(Main);
