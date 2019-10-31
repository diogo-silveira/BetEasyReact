import React from 'react';
import { shallow } from 'enzyme';
import EventDetails from './event-details';

describe('<EventDetails />', () => {
  test('renders', () => {
    const wrapper = shallow(<EventDetails />);
    expect(wrapper).toMatchSnapshot();
  });
});
