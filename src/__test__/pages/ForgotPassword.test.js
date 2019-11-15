import React from 'react';
import { shallow } from 'enzyme';

import ForgotPassword from '../../components/pages/ForgotPassword';
import SiteNav from '../../components/partials/SiteNav';
import ForgotPasswordForm from '../../components/partials/ForgotPasswordForm';

describe('ForgotPassword', () => {
  const render = () => {
    const wrapper = shallow(<ForgotPassword />);
    return wrapper;
  };

  it('should render ForgotPassword Page', () => {
    const forgotPasswordPage = render();
    expect(forgotPasswordPage).toHaveLength(1);
  });

  it('should have SiteNav component', () => {
    const forgotPasswordPage = render();
    expect(forgotPasswordPage.find(SiteNav)).toHaveLength(1);
  });

  it('should have div component with className "content"', () => {
    const forgotPasswordPage = render();
    expect(
      forgotPasswordPage
        .find('div')
        .last()
        .hasClass('content'),
    ).toEqual(true);
  });

  it('should have ForgotPasswordForm component', () => {
    const forgotPasswordPage = render();
    expect(forgotPasswordPage.find(ForgotPasswordForm)).toHaveLength(1);
  });
});
