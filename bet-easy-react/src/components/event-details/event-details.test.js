import React from 'react';
import {configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { EventDetails } from './event-details';

configure({ adapter: new Adapter() });

describe('When display EventDetails', () => {
  test('renders', () => {
    const wrapper = shallow(<EventDetails />);
    expect(wrapper).toMatchSnapshot();
  });
});
