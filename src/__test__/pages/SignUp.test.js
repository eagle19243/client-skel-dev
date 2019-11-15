import React from 'react';
import { Row, Col } from 'reactstrap';
import { shallow } from 'enzyme';

import SignUp from '../../components/pages/SignUp';
import SiteNav from '../../components/partials/SiteNav';

describe('SignUp', () => {
  const render = () => {
    const wrapper = shallow(<SignUp />);
    return wrapper;
  };

  it('should render SignUp page', () => {
    const signUpPage = render();
    expect(signUpPage).toHaveLength(1);
  });

  it('should have SiteNav component', () => {
    const signUpPage = render();
    expect(signUpPage.find(SiteNav)).toHaveLength(1);
  });

  it('should have 3 div component"', () => {
    const signUpPage = render();
    expect(signUpPage.find('div')).toHaveLength(3);
  });

  it('should have 1 Row component', () => {
    const signUpPage = render();
    expect(signUpPage.find(Row)).toHaveLength(1);
  });

  it('should have 1 Col component', () => {
    const signUpPage = render();
    expect(signUpPage.find(Col)).toHaveLength(1);
  });
});
