import React from 'react';
import { shallow } from 'enzyme';
import Racing from './racing';

describe('<Racing />', () => {
  test('renders', () => {
    const wrapper = shallow(<Racing />);
    expect(wrapper).toMatchSnapshot();
  });
});
