import React from 'react';
import SiteNav from '../partials/SiteNav';

class AuthPage extends React.Component {
  render() {
    return (
      <div>
        <SiteNav />
        <div className="content">AuthPage</div>
      </div>
    );
  }
}

export default AuthPage;
