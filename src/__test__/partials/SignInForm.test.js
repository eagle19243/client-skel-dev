import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { shallow } from 'enzyme';

import SignInForm from '../../components/partials/SignInForm';

describe('SignInForm', () => {
  const render = () => {
    const wrapper = shallow(<SignInForm />);
    return wrapper;
  };

  it('should render SignInForm component', () => {
    const signInForm = render();
    expect(signInForm).toHaveLength(1);
  });

  it('should have div component', () => {
    const signInForm = render();
    expect(signInForm.find('div')).toHaveLength(1);
  });

  it('should have h2 component', () => {
    const signInForm = render();
    expect(signInForm.find('h2')).toHaveLength(1);
  });

  it('should have Form component', () => {
    const signInForm = render();
    expect(signInForm.find(Form)).toHaveLength(1);
  });

  it('should have 4 FormGroup component', () => {
    const signInForm = render();
    expect(signInForm.find(FormGroup)).toHaveLength(4);
  });

  it('should have 2 Label component', () => {
    const signInForm = render();
    expect(signInForm.find(Label)).toHaveLength(2);
  });

  it('should have 2 Input component', () => {
    const signInForm = render();
    expect(signInForm.find(Input)).toHaveLength(2);
  });

  it('should have 2 Button component', () => {
    const signInForm = render();
    expect(signInForm.find(Button)).toHaveLength(2);
  });

  it('should have Link component', () => {
    const signInForm = render();
    expect(signInForm.find(Link)).toHaveLength(1);
  });
});
