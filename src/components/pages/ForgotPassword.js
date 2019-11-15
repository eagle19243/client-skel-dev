import React from 'react';
import { Row, Col } from 'reactstrap';
import SiteNav from '../partials/SiteNav';
import ForgotPasswordForm from '../partials/ForgotPasswordForm';

class ForgotPassword extends React.Component {
  render() {
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
              <ForgotPasswordForm />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default ForgotPassword;
