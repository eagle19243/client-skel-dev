import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Auth } from 'aws-amplify';
import AppState from '../../support/AppState';
import { Link } from 'react-router-dom';

class SignInForm extends React.Component {
  state = {
    username: '',
    password: '',
  };

  componentWillUnmount() {
    const { resetAlertBanner } = AppState;
    resetAlertBanner();
  }

  goToSignUp = () => {
    const { history } = AppState;
    history.push('/signup');
  };

  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  signIn = event => {
    event.preventDefault();
    const { history, set_prop } = AppState;
    Auth.signIn(this.state.username, this.state.password)
      .then(user => {
        // MFA is not on by default. See Privato⁩/IT⁩/_CodeCommit⁩/Cognito⁩/ReactAmplifyAuth⁩/react-auth⁩/⁨src⁩/SignIn.js
        // this.setState({ user, showConfirmation: true })
        console.log('SignIn handleSubmit user', user);
        set_prop('user', user);
        set_prop('isAuthenticated', true);
        history.push('/');
      })
      .catch(err => {
        let AlertBanner = { visible: true, color: 'danger', text: err.message };
        set_prop('AlertBanner', AlertBanner);
        if (err.code === 'UserNotConfirmedException') {
          // The error happens if the user didn't finish the confirmation step when signing up
          // In this case you need to resend the code and confirm the user
          // About how to resend the code and confirm the user, please check the signUp part
          set_prop('showSingUpConfirmation', true);
        } else if (err.code === 'PasswordResetRequiredException') {
          // The error happens when the password is reset in the Cognito console
          // In this case you need to call forgotPassword to reset the password
          // Please check the Forgot Password part.
          const { history } = AppState;
          history.push('/forgotpassword');
        } else if (err.code === 'NotAuthorizedException') {
          // The error happens when the incorrect password is provided
        } else if (err.code === 'UserNotFoundException') {
          // The error happens when the supplied username/email does not exist in the Cognito user pool
        }
      });
  };

  render() {
    return (
      <div>
        <h2>Sign In</h2>
        <Form onSubmit={this.signIn}>
          <FormGroup>
            <Label for="username">User name</Label>
            <Input
              type="text"
              name="username"
              id="username"
              placeholder=""
              onChange={this.handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder=""
              onChange={this.handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Button color="primary">Submit</Button>
          </FormGroup>
          <FormGroup>
            <Link to="/forgotpassword">Forgot Password</Link>
          </FormGroup>
          <Button color="primary" size="sm" onClick={this.goToSignUp}>
            Register
          </Button>
          &nbsp; if you do not have an account.
        </Form>
      </div>
    );
  }
}

export default SignInForm;
