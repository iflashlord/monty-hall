import React from 'react';
import { render, getByTestId, queryByTestId } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './../../app/store';
import Simulator from './Simulator';

test('render simulator feature', () => {
  const { getByText, getByTestId } = render(
    <Provider store={store}>
      <Simulator />
    </Provider>
  );

  // check auto focus
  expect(getByTestId('simulator-number')).toHaveFocus();

  // check change radio button is checked
  expect(getByTestId('input-radio-change')).toBeChecked();
  expect(getByTestId('input-radio-stick')).not.toBeChecked();
  
  // check validity of feature
  expect(getByText(/Reset/i)).toBeInTheDocument();
  expect(getByText(/Simulate/i)).toBeInTheDocument();
  expect(getByText(/Stick/i)).toBeInTheDocument();
  expect(getByText(/Change/i)).toBeInTheDocument();
});
 