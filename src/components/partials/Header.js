import React from 'react';
import { Row, Col } from 'reactstrap';
import { view } from 'react-easy-state';
import UserNav from './UserNav';
import AppState from '../../support/AppState';

class Header extends React.Component {
  goHome = () => {
    const { history } = AppState; // history set in SiteNav
    history.push('/');
  };

  render() {
    return (
      <header className="App-header">
        <Row>
          <Col xs={{ size: 12 }} sm={{ size: 6 }} md={{ size: 9 }}>
            <img
              src='../../logo.png'
              className="App-logo cursor-pointer"
              alt="logo"
              onClick={this.goHome}
            />
          </Col>
          <Col xs={{ size: 12 }} sm={{ size: 6 }} md={{ size: 3 }}>
            <UserNav />
          </Col>
        </Row>
      </header>
    );
  }
}

export default view(Header);
