import React from 'react';
import { withRouter } from 'react-router-dom';
import SiteNav from '../partials/SiteNav';

class Home extends React.Component {
  render() {
    return (
      <div>
        <SiteNav />
        <div className="content">Home</div>
      </div>
    );
  }
}

export default withRouter(Home);
