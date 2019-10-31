import React from 'react';
import { shallow } from 'enzyme';
import FilterHorseRacing from './filter-horse-racing';

describe('<FilterHorseRacing />', () => {
  test('renders', () => {
    const wrapper = shallow(<FilterHorseRacing />);
    expect(wrapper).toMatchSnapshot();
  });
});
