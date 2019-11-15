import React from 'react'
import { withRouter, Switch, Route, Redirect, BrowserRouter as Router } from 'react-router-dom'
import { Auth } from 'aws-amplify'
import Home from "../components/pages/Home";
import SignIn from "../components/pages/SignIn";
import SignUp from "../components/pages/SignUp";
import AuthPage from "../components/pages/AuthPage";
import ForgotPassword from "../components/pages/ForgotPassword";
import ChangePassword from "../components/pages/ChangePassword";

// Handle pages that require authentication.
class PrivateRoute extends React.Component {
  state = {
    loaded: false,
    isAuthenticated: false
  }
  componentDidMount() {
    this.authenticate();
    this.unlisten = this.props.history.listen(() => {
      Auth.currentAuthenticatedUser()
        .then(user => console.log('user: ', user))
        .catch(() => {
          if (this.state.isAuthenticated) this.setState({ isAuthenticated: false })
        })
    });
  }
  componentWillUnmount() {
    this.unlisten();
  }
  // Determine if the user is authenticated.
  authenticate() {
    Auth.currentAuthenticatedUser()
      .then((user) => {
        this.setState({ loaded: true, isAuthenticated: true })
      })
      .catch(() => this.props.history.push('/signin'))
  }
  // Show a page but redirect to the sign in page if an anonymous user attempts to load a page that requires authentication.
  render() {
    const { component: Component, ...rest } = this.props
    const { loaded , isAuthenticated} = this.state
    if (!loaded) return null
    return (
      <Route
        {...rest}
        render={props => {
          return isAuthenticated ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/signin",
              }}
            />
          )
        }}
      />
    )
  }
}

PrivateRoute = withRouter(PrivateRoute)

const Routes = () => (
  <Router basename = {process.env.REACT_APP_BASENAME}>
    <Switch>
      <Route path='/home' component={Home} />
      <Route path='/signin' component={SignIn} />
      <Route path='/signup' component={SignUp} />
      <Route path='/forgotpassword' component={ForgotPassword} />
      <Route path='/changepassword' component={ChangePassword} />
    	<Route exact path="/" render={() => (
    		<Redirect to="/home"/> )
    	}/>
      <PrivateRoute path='/authpage' component={AuthPage} />
    </Switch>
  </Router>
)

export default Routes
