import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './../../app/store';
import Gates from './Gates';
test('render gate feature', () => {
  const { getByText } = render(
    <Provider store={store}>
      <Gates />
    </Provider>
  ); 

  expect(getByText(/1/i)).toBeInTheDocument();
  expect(getByText(/2/i)).toBeInTheDocument();
  expect(getByText(/3/i)).toBeInTheDocument();
});
