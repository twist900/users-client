import 'semantic-ui-css/semantic.min.css';
import Header from './utils/Header';

const Layout = props => (
  <div>
    <style global jsx>{`
      html,
      body,
      body > div:first-child,
      div#__next,
      div#__next > div,
      div#__next > div > div {
        height: 100%;
      }
      background: '#f0f2f7';
    `}</style>
    {/* <Header /> */}
    {props.children}
  </div>
);

export default Layout;
