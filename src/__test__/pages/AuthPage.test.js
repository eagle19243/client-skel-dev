import React from 'react';
import { shallow } from 'enzyme';

import AuthPage from '../../components/pages/AuthPage';
import SiteNav from '../../components/partials/SiteNav';

describe('AuthPage', () => {
  const render = () => {
    const wrapper = shallow(<AuthPage />);
    return wrapper;
  };

  it('should render AuthPage', () => {
    const authPage = render();
    expect(authPage).toHaveLength(1);
  });

  it('should have SiteNav component', () => {
    const authPage = render();
    expect(authPage.find(SiteNav)).toHaveLength(1);
  });

  it('should have div component with className "content"', () => {
    const authPage = render();
    expect(
      authPage
        .find('div')
        .last()
        .hasClass('content'),
    ).toEqual(true);
  });
});
