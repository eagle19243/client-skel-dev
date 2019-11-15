import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Auth } from 'aws-amplify';
import AppState from '../../support/AppState';

class ForgotPasswordForm extends React.Component {
  state = {
    username: '',
    new_password: '',
    authCode: '',
    showCode: false,
  };

  componentWillUnmount() {
    const { resetAlertBanner } = AppState;
    resetAlertBanner();
  }

  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  forgotPassword = event => {
    event.preventDefault();
    const { set_prop } = AppState;
    let AlertBanner = { visible: false, color: 'light', text: '' };
    set_prop('AlertBanner', AlertBanner);
    const { username } = this.state;
    Auth.forgotPassword(username)
      .then(data => {
        console.log('ForgotPassword forgotPassword data', data);
        this.setState({ showCode: true });
      })
      .catch(err => {
        console.log('ForgotPassword forgotPasswordSubmit err', err);
        const { set_prop } = AppState;
        let AlertBanner = { visible: true, color: 'danger', text: err.message };
        set_prop('AlertBanner', AlertBanner);
      });
  };
  forgotPasswordSubmit = event => {
    event.preventDefault();
    Auth.forgotPasswordSubmit(
      this.state.username,
      this.state.authCode,
      this.state.new_password,
    )
      .then(data => {
        console.log('ForgotPassword forgotPasswordSubmit data', data);
        const { history } = AppState;
        history.push('/signin');
      })
      .catch(err => {
        console.log('ForgotPassword forgotPasswordSubmit err', err);
        const { set_prop } = AppState;
        let AlertBanner = { visible: true, color: 'danger', text: err.message };
        set_prop('AlertBanner', AlertBanner);
        if (err.code === 'CodeMismatchException') {
          this.setState({ showCode: false });
        }
      });
  };

  render() {
    const { showCode } = this.state;
    return (
      <div>
        {!showCode && (
          <div>
            <h2>Forgot Password</h2>
            <Form onSubmit={this.forgotPassword}>
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
              <Button color="primary">Submit</Button>
            </Form>
          </div>
        )}
        {showCode && (
          <div>
            <h2>Forgot Password</h2>
            <Form onSubmit={this.forgotPasswordSubmit}>
              <FormGroup>
                <Label for="authCode">Code</Label>
                <Input
                  type="text"
                  name="authCode"
                  id="authCode"
                  placeholder=""
                  onChange={this.handleChange}
                  required
                />
                <FormText>
                  Check your spam folder if you do not see "Your verification
                  code" email
                </FormText>
              </FormGroup>
              <FormGroup>
                <Label for="new_password">New Password</Label>
                <Input
                  type="password"
                  name="new_password"
                  id="new_password"
                  placeholder=""
                  onChange={this.handleChange}
                  required
                />
              </FormGroup>
              <Button color="primary">Submit</Button>
            </Form>
          </div>
        )}
      </div>
    );
  }
}

export default ForgotPasswordForm;
