import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { shallow } from 'enzyme';

import SignUpForm from '../../components/partials/SignUpForm';

describe('SignUpForm', () => {
  const render = () => {
    const wrapper = shallow(<SignUpForm />);
    return wrapper;
  };

  it('should render SignUpForm component', () => {
    const signUpForm = render();
    expect(signUpForm).toHaveLength(1);
  });

  it('should have div component', () => {
    const signUpForm = render();
    expect(signUpForm.find('div')).toHaveLength(1);
  });

  it('should have h2 component', () => {
    const signUpForm = render();
    expect(signUpForm.find('h2')).toHaveLength(1);
  });

  it('should have Form component', () => {
    const signUpForm = render();
    expect(signUpForm.find(Form)).toHaveLength(1);
  });

  it('should have 4 FormGroup component', () => {
    const signUpForm = render();
    expect(signUpForm.find(FormGroup)).toHaveLength(4);
  });

  it('should have 4 Label component', () => {
    const signUpForm = render();
    expect(signUpForm.find(Label)).toHaveLength(4);
  });

  it('should have 4 Input component', () => {
    const signUpForm = render();
    expect(signUpForm.find(Input)).toHaveLength(4);
  });

  it('should have Button component', () => {
    const signUpForm = render();
    expect(signUpForm.find(Button)).toHaveLength(1);
  });

  it('should have FormText component', () => {
    const signUpForm = render();
    expect(signUpForm.find(FormText)).toHaveLength(1);
  });
});
