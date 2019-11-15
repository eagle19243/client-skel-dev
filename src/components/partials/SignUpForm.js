import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Auth } from 'aws-amplify';
import AppState from '../../support/AppState';

class SignUpForm extends React.Component {
  state = {
    username: '',
    password: '',
    email: '',
    phone_number: ''
  }
  
  componentWillUnmount() {
    const { resetAlertBanner } = AppState;
    resetAlertBanner();
  }
	
  handleChange = (event) => {
		this.setState({[event.target.id] : event.target.value})
  }

  signUp = (event)  => {
    const { set_prop } = AppState;
    event.preventDefault();
    const { username, password, email, phone_number } = this.state;
    Auth.signUp({username, password, attributes: {email, phone_number}})
    .then(data => {
      console.log('SignUp signUp user', data.user);
      set_prop("user", data.user);

      if(data.userConfirmed){
        const { history } = AppState;
        history.push('/signin');
      }else{
        set_prop("showSingUpConfirmation", true);
      }
    })
    .catch(err => {
      console.log('SignUp signUp err', err);
      let AlertBanner = {visible : true, color : 'danger', text : err.message}
      set_prop("AlertBanner", AlertBanner); 
     }); 
  }

	render() {
	  return (
      <div>
        <h2>Sign Up</h2>
        <Form onSubmit={ this.signUp }>
          <FormGroup>
            <Label for="username">User name</Label>
            <Input type="text" name="username" id="username" placeholder="" onChange={this.handleChange} required />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input type="password" name="password" id="password" placeholder="" onChange={this.handleChange} required />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input type="email" name="email" id="email" placeholder="" onChange={this.handleChange} required />
          </FormGroup>
          <FormGroup>
            <Label for="phone_number">Phone Number</Label>
            <Input type="phone" name="phone_number" id="phone_number" placeholder="" onChange={this.handleChange} required />
            <FormText>Format: +&lt;country code&gt;&lt;area code&gt;&lt;number&gt; <br/> ex. +12485551212</FormText>
          </FormGroup>
          <Button color="primary">Submit</Button>
        </Form>
      </div>
	  );
	}
};

export default SignUpForm;
