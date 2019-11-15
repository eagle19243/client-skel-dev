import React from "react";
import { Row, Col } from 'reactstrap';
import SiteNav from "../partials/SiteNav";
import ChangePasswordForm from "../partials/ChangePasswordForm";

class ChangePassword extends React.Component {

	render() {
	  return (
      <div>
        <SiteNav />
			  <div className="content">
  	      <Row>
  					<Col xs={{ size: 10, offset: 1 }} sm={{ size: 6, offset: 3 }} md={{ size: 4, offset: 4 }}>
              <div>
                <div>
      						<ChangePasswordForm />
                </div>
              </div>
  					</Col>
  				</Row>
  			</div>
      </div>
	  );
	}
};

export default ChangePassword;
