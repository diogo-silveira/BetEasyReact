import React from 'react';
import { shallow } from 'enzyme';
import BetEasyLogo from './bet-easy-logo';

describe('<BetEasyLogo />', () => {
  test('renders', () => {
    const wrapper = shallow(<BetEasyLogo />);
    expect(wrapper).toMatchSnapshot();
  });
});
