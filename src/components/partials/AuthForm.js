import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Auth } from 'aws-amplify';
import AppState from '../../support/AppState';

class AuthForm extends React.Component {
  state = {
    authCode: '',
  };

  componentWillUnmount() {
    const { resetAlertBanner } = AppState;
    resetAlertBanner();
  }

  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  // This handles the error UserNotConfirmedException
  confirmSignUp = event => {
    const { set_prop, user } = AppState;
    event.preventDefault();

    Auth.confirmSignUp(user.username, this.state.authCode)
      .then(data => {
        // TODO: verify if success is a string and not a boolean.
        console.log('SignUp confirmSignUp data', data);
        if (data === 'SUCCESS') {
          set_prop('showSingUpConfirmation', false);
          const { history } = AppState;
          history.push('/signin');
        } else {
          alert('Bad code');
        }
      })
      .catch(err => {
        console.log('SignUp confirmSignUp err', err);
        let AlertBanner = { visible: true, color: 'danger', text: err.message };
        set_prop('AlertBanner', AlertBanner);
      });
  };
  resendSignUp = () => {
    const { set_prop } = AppState;
    Auth.resendSignUp(this.state.username)
      .then(() => {
        let AlertBanner = {
          visible: true,
          color: 'success',
          text: 'Code resent successfully.',
        };
        set_prop('AlertBanner', AlertBanner);
      })
      .catch(err => {
        console.log('SignUp resendSignUp err', err);
        let AlertBanner = { visible: true, color: 'danger', text: err.message };
        set_prop('AlertBanner', AlertBanner);
      });
  };

  render() {
    return (
      <div>
        <h2>Sign Up</h2>
        <Form onSubmit={this.confirmSignUp}>
          <FormGroup>
            <Label for="authCode">Confirmation Code</Label>
            <Input
              type="text"
              name="authCode"
              id="authCode"
              placeholder=""
              onChange={this.handleChange}
              required
            />
            <FormText>
              Check your spam folder if you do not see the email
            </FormText>
          </FormGroup>
          <Button color="primary">Submit</Button> &nbsp;
          <Button color="link" onClick={this.resendSignUp}>
            Resend Code
          </Button>
        </Form>
      </div>
    );
  }
}

export default AuthForm;
