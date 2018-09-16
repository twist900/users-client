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
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
            integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
            crossorigin="anonymous"
          />
        </Head>
        <Header pathname={router.pathname} />
        <NavBar />
      </div>
    );
  }
}

export default withRouter(Main);
