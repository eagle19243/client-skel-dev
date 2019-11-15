import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { shallow } from 'enzyme';

import ChangePasswordForm from '../../components/partials/ChangePasswordForm';

describe('ChangePasswordForm', () => {
  const render = () => {
    const wrapper = shallow(<ChangePasswordForm />);
    return wrapper;
  };

  it('should render ChangePasswordForm component', () => {
    const changePasswordForm = render();
    expect(changePasswordForm).toHaveLength(1);
  });

  it('should have 1 div component', () => {
    const changePasswordForm = render();
    expect(changePasswordForm.find('div')).toHaveLength(1);
  });

  it('should have h2 component', () => {
    const changePasswordForm = render();
    expect(changePasswordForm.find('h2')).toHaveLength(1);
  });

  it('should have Form component', () => {
    const changePasswordForm = render();
    expect(changePasswordForm.find(Form)).toHaveLength(1);
  });

  it('should have 2 FormGroup component', () => {
    const changePasswordForm = render();
    expect(changePasswordForm.find(FormGroup)).toHaveLength(2);
  });

  it('should have 2 Label component', () => {
    const changePasswordForm = render();
    expect(changePasswordForm.find(Label)).toHaveLength(2);
  });

  it('should have 2 Input component', () => {
    const changePasswordForm = render();
    expect(changePasswordForm.find(Input)).toHaveLength(2);
  });

  it('should have 1 Button component', () => {
    const changePasswordForm = render();
    expect(changePasswordForm.find(Button)).toHaveLength(1);
  });
});
