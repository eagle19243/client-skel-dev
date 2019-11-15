import React from 'react';
import { Button } from 'reactstrap';
import { shallow } from 'enzyme';

import UserNav from '../../components/partials/UserNav';

describe('UserNav', () => {
  const render = () => {
    const wrapper = shallow(<UserNav />);
    return wrapper;
  };

  it('should render UserNav component', () => {
    const siteNav = render();
    expect(siteNav).toHaveLength(1);
  });

  it('should have 2 div component', () => {
    const siteNav = render();
    expect(siteNav.find('div')).toHaveLength(2);
  });

  it('should have Button component', () => {
    const siteNav = render();
    expect(siteNav.find(Button)).toHaveLength(1);
  });
});
