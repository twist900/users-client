import 'semantic-ui-css/semantic.min.css';
import { Menu, Container, Button } from 'semantic-ui-react';
import Cookies from 'js-cookie';

const Layout = props => (
  <div>
    <style global jsx>{`
      html,
      body,
      body > div:first-child,
      div#__next,
      div#__next > div {
        height: 100%;
      }
      body {
        background: '#f0f2f7';
      }
    `}</style>
    <Menu fixed="top" inverted>
      <Container>
        {Cookies.get('id_token') && (
          <Menu.Item position="right">
            <Button
              onClick={() => {}}
              floated="right"
              basic
              color="red"
              size="mini"
              onClick={() => {
                Cookies.set('id_token', '');
                document.location.pathname = '/';
              }}
            >
              Logout
            </Button>
          </Menu.Item>
        )}
      </Container>
    </Menu>
    <div
      style={{
        height: '100%',
        width: '900px',
        margin: '0 auto',
        marginTop: '100px'
      }}
      className="container"
    >
      {props.children}
    </div>
  </div>
);

export default Layout;
