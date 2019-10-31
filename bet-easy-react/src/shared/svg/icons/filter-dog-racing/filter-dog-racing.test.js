import React from 'react';
import { shallow } from 'enzyme';
import FilterDogRacing from './filter-dog-racing';

describe('<FilterDogRacing />', () => {
  test('renders', () => {
    const wrapper = shallow(<FilterDogRacing />);
    expect(wrapper).toMatchSnapshot();
  });
});
