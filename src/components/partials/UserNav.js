import React from 'react';
import { Button } from 'reactstrap';
import { Auth } from 'aws-amplify';
import { view } from 'react-easy-state';
import {
  Navbar,
  Nav,
  UncontrolledDropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
} from 'reactstrap';
import AppState from '../../support/AppState';

class UserNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dropdownOpen: false };
  }

  signOut = () => {
    const { history, set_prop } = AppState; // history set in SiteNav
    Auth.signOut()
      .then(() => {
        set_prop('user', null);
        set_prop('isAuthenticated', false);
        history.push('/');
      })
      .catch(() => console.log('error signing out...'));
  };
  signIn = () => {
    const { history } = AppState; // history set in SiteNav
    history.push('/signin');
  };
  signUp = () => {
    const { history } = AppState; // history set in SiteNav
    history.push('/signup');
  };
  ChangePassword = () => {
    const { history } = AppState; // history set in SiteNav
    history.push('/changepassword');
  };

  render() {
    const { user, isAuthenticated } = AppState; // history set in SiteNav
    return (
      <div>
        {!isAuthenticated && (
          <div>
            <Button color="link" onClick={this.signIn}>
              Sign In
            </Button>
          </div>
        )}
        {isAuthenticated && (
          <div>
            <Navbar color="light" light expand="md">
              <Nav className="ml-auto" navbar>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Hello {user.username}
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem onClick={this.signOut}>Sign Out</DropdownItem>
                    <DropdownItem onClick={this.ChangePassword}>
                      Change Password
                    </DropdownItem>
                    <DropdownItem disabled>Account</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Navbar>
          </div>
        )}
      </div>
    );
  }
}

export default view(UserNav);
