import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { shallow } from 'enzyme';

import ForgotPasswordForm from '../../components/partials/ForgotPasswordForm';

describe('ForgotPasswordForm', () => {
  const render = () => {
    const wrapper = shallow(<ForgotPasswordForm />);
    return wrapper;
  };

  it('should render ForgotPasswordForm component', () => {
    const forgotPasswordForm = render();
    expect(forgotPasswordForm).toHaveLength(1);
  });

  it('should have 2 div component when showCode is false', () => {
    const forgotPasswordForm = render();
    expect(forgotPasswordForm.find('div')).toHaveLength(2);
  });

  it('should have h2 component', () => {
    const forgotPasswordForm = render();
    expect(forgotPasswordForm.find('h2')).toHaveLength(1);
  });

  it('should have Form component', () => {
    const forgotPasswordForm = render();
    expect(forgotPasswordForm.find(Form)).toHaveLength(1);
  });

  it('should have FormGroup component', () => {
    const forgotPasswordForm = render();
    expect(forgotPasswordForm.find(FormGroup)).toHaveLength(1);
  });

  it('should have Label component', () => {
    const forgotPasswordForm = render();
    expect(forgotPasswordForm.find(Label)).toHaveLength(1);
  });

  it('should have Input component', () => {
    const forgotPasswordForm = render();
    expect(forgotPasswordForm.find(Input)).toHaveLength(1);
  });

  it('should have Button component', () => {
    const forgotPasswordForm = render();
    expect(forgotPasswordForm.find(Button)).toHaveLength(1);
  });
});
