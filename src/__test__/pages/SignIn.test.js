import React from 'react';
import { Row, Col } from 'reactstrap';
import { shallow } from 'enzyme';

import SignIn from '../../components/pages/SignIn';
import SiteNav from '../../components/partials/SiteNav';
import SignInForm from '../../components/partials/SignInForm';
import AuthForm from '../../components/partials/AuthForm';

describe('SignIn', () => {
  const render = () => {
    const wrapper = shallow(<SignIn />);
    return wrapper;
  };

  it('should render SignIn page', () => {
    const signInPage = render();
    expect(signInPage).toHaveLength(1);
  });

  it('should have SiteNav component', () => {
    const signInPage = render();
    expect(signInPage.find(SiteNav)).toHaveLength(1);
  });

  it('should have div component with className "content"', () => {
    const signInPage = render();
    expect(
      signInPage
        .find('div')
        .last()
        .hasClass('content'),
    ).toEqual(true);
  });

  it('should have 1 Row component', () => {
    const signInPage = render();
    expect(signInPage.find(Row)).toHaveLength(1);
  });

  it('should have 1 Col component', () => {
    const signInPage = render();
    expect(signInPage.find(Col)).toHaveLength(1);
  });

  it('should have SignInForm component', () => {
    const signInPage = render();
    expect(signInPage.find(SignInForm)).toHaveLength(1);
  });

  it('should not have AuthForm component', () => {
    const signInPage = render();
    expect(signInPage.find(AuthForm)).toHaveLength(0);
  });
});
