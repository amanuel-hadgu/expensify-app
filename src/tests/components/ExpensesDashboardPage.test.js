import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import ExpensesDashboardPage from '../../components/ExpenseDashboardPage';

test('should render ExpensesDashboardPage correctly', () => {
    const wrapper = shallow(<ExpensesDashboardPage />);
    expect(toJSON(wrapper)).toMatchSnapshot();
});