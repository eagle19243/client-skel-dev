import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Auth } from 'aws-amplify';
import AppState from '../../support/AppState';

class ChangePasswordForm extends React.Component {
  state = {
    password: '',
    new_password: '',
  };

  componentWillUnmount() {
    const { resetAlertBanner } = AppState;
    resetAlertBanner();
  }

  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  changePassword = event => {
    event.preventDefault();
    Auth.currentAuthenticatedUser()
      .then(user => {
        Auth.changePassword(user, this.state.password, this.state.new_password)
          .then(data => {
            console.log('ChangePassword changePassword data', data);
            if (data === 'SUCCESS') {
              const { history } = AppState;
              history.push('/');
            }
          })
          .catch(err => {
            console.log(
              'ChangePassword changePassword changePassword err',
              err,
            );
            const { set_prop } = AppState;
            let AlertBanner = {
              visible: true,
              color: 'danger',
              text: err.message,
            };
            set_prop('AlertBanner', AlertBanner);
          });
      })
      .then(data => console.log(data))
      .catch(err => {
        console.log(
          'ChangePassword changePassword currentAuthenticatedUser err',
          err,
        );
        const { set_prop } = AppState;
        let AlertBanner = { visible: true, color: 'danger', text: err.message };
        set_prop('AlertBanner', AlertBanner);
      });
  };

  render() {
    return (
      <div>
        <h2>Change Password</h2>
        <Form onSubmit={this.changePassword}>
          <FormGroup>
            <Label for="password">Current Password</Label>
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
    );
  }
}

export default ChangePasswordForm;
