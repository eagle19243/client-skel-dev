import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { shallow } from 'enzyme';

import AuthForm from '../../components/partials/AuthForm';

describe('AuthForm', () => {
  const render = () => {
    const wrapper = shallow(<AuthForm />);
    return wrapper;
  };

  it('should render AuthForm component', () => {
    const authForm = render();
    expect(authForm).toHaveLength(1);
  });

  it('should have 1 div component', () => {
    const authForm = render();
    expect(authForm.find('div')).toHaveLength(1);
  });

  it('should have h2 component', () => {
    const authForm = render();
    expect(authForm.find('h2')).toHaveLength(1);
  });

  it('should have Form component', () => {
    const authForm = render();
    expect(authForm.find(Form)).toHaveLength(1);
  });

  it('should have FormGroup component', () => {
    const authForm = render();
    expect(authForm.find(FormGroup)).toHaveLength(1);
  });

  it('should have Label component', () => {
    const authForm = render();
    expect(authForm.find(Label)).toHaveLength(1);
  });

  it('should have Input component', () => {
    const authForm = render();
    expect(authForm.find(Input)).toHaveLength(1);
  });

  it('should have FormText component', () => {
    const authForm = render();
    expect(authForm.find(FormText)).toHaveLength(1);
  });

  it('should have 2 Button component', () => {
    const authForm = render();
    expect(authForm.find(Button)).toHaveLength(2);
  });
});
