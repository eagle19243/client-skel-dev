import React from 'react';
import { Row, Col } from 'reactstrap';
import { view } from 'react-easy-state';
import SiteNav from '../partials/SiteNav';
import AppState from '../../support/AppState';
import AuthForm from '../partials/AuthForm';
import SignUpForm from '../partials/SignUpForm';

class SignUp extends React.Component {
  render() {
    const { showSingUpConfirmation } = AppState;

    return (
      <div>
        <SiteNav />
        <div className="content">
          <Row>
            <Col
              xs={{ size: 10, offset: 1 }}
              sm={{ size: 6, offset: 3 }}
              md={{ size: 4, offset: 4 }}
            >
              <div>
                {!showSingUpConfirmation && <SignUpForm />}
                {showSingUpConfirmation && <AuthForm />}
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default view(SignUp);
