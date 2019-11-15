import React from "react";
import SiteNav from "../partials/SiteNav";
// import AppState from '../../support/AppState';
import { withRouter } from 'react-router-dom'

class Home extends React.Component {

	render() {
	  return (
      <div>
        <SiteNav />
			  <div className="content">
          Home
			  </div>
      </div>
	  );
	}
};

export default withRouter(Home);