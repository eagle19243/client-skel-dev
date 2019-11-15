import React from "react";
import { Row, Col, Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap'; 
import { Auth } from 'aws-amplify';
import { view } from 'react-easy-state';
import { NavLink as RRNavLink  } from "react-router-dom";
import AppState from '../../support/AppState';
import AlertBanner from './AlertBanner';
import { withRouter } from 'react-router-dom';

class SiteNav extends React.Component {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  
  componentDidMount() {
    console.log('SiteNav componentDidMount');
    const { set_prop } = AppState;
    set_prop("history", this.props.history);
    Auth.currentAuthenticatedUser()
    .then((user) => {
      const { set_prop } = AppState;
      set_prop("user", user);
      set_prop("isAuthenticated", true);
      this.setState({isAuthenticated:true});  // Not sure why this is needed.  May be it trigger a refresh
    })
    .catch((err) => console.log('SiteNav componentDidMount catch', err))
  }

  static getDerivedStateFromProps(props) {
    console.log('SiteNav getDerivedStateFromProps props', props);
    return null;
  }
	
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

	render() {
    const { isAuthenticated } = AppState; 
    return (
      <div>
        <Row className="bottom-border">
          <Col xs={{ size: 12 }} sm={{ size: 12}} md={{ size: 12}} >
      			<Navbar color="faded" light expand="md" id="main-menu">
      				<NavbarToggler onClick={this.toggle} />
      				<Collapse isOpen={this.state.isOpen} navbar>
      				 <Nav navbar>
      				   <NavItem>
      				     <NavLink tag={RRNavLink} activeClassName="active" to="/home">Home</NavLink>
      				   </NavItem>
              { isAuthenticated &&
                 <NavItem>
                   <NavLink tag={RRNavLink} activeClassName="active" to="/authpage">AuthPage</NavLink>
                 </NavItem>
              }
      				 </Nav>
      				</Collapse>
      			</Navbar>
          </Col>
        </Row>
        <AlertBanner/>
      </div>
    )
	}
};

export default view(withRouter(SiteNav));
