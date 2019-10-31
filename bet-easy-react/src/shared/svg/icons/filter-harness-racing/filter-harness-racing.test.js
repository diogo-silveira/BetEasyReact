import React from 'react';
import { shallow } from 'enzyme';
import FilterHarnessRacing from './filter-harness-racing';

describe('<FilterHarnessRacing />', () => {
  test('renders', () => {
    const wrapper = shallow(<FilterHarnessRacing />);
    expect(wrapper).toMatchSnapshot();
  });
});
