import React from 'react';
import { shallow } from 'enzyme';

import ChangePassword from '../../components/pages/ChangePassword';
import SiteNav from '../../components/partials/SiteNav';
import ChangePasswordForm from '../../components/partials/ChangePasswordForm';

describe('ChangePassword', () => {
  const render = () => {
    const wrapper = shallow(<ChangePassword />);
    return wrapper;
  };

  it('should render ChangePassword Page', () => {
    const changePasswordPage = render();
    expect(changePasswordPage).toHaveLength(1);
  });

  it('should have SiteNav component', () => {
    const changePasswordPage = render();
    expect(changePasswordPage.find(SiteNav)).toHaveLength(1);
  });

  it('should have 4 div', () => {
    const changePasswordPage = render();
    expect(changePasswordPage.find('div')).toHaveLength(4);
  });

  it('should have ChangePasswordForm component', () => {
    const changePasswordPage = render();
    expect(changePasswordPage.find(ChangePasswordForm)).toHaveLength(1);
  });
});
