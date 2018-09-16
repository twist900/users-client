import { Component } from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';

class Header extends Component {
  logOut() {
    document.cookie = 'id_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.location.pathname = '/';
  }

  render() {
    const { pathname } = this.props;
    return (
      <div>
        <div lg={8} lgOffset={2}>
          <div style={{ borderRadius: '15px' }}>
            <h1 style={{ textAlign: 'center' }}>If you see this you're logged</h1>
            <h2 style={{ textAlign: 'center' }}>{pathname}</h2>
            <Link href="/" as="/">
              <h3>
                <p style={{ textAlign: 'center' }}>
                  <button bsStyle="primary" onClick={this.logOut}>
                    Log Out
                  </button>
                </p>
              </h3>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state
  };
};

export default connect(mapStateToProps)(Header);
