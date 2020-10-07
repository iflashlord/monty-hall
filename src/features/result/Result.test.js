import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './../../app/store';
import Result from './Result';

test('render result feature', () => {
  const { getByText } = render(
    <Provider store={store}>
      <Result />
    </Provider>
  );

  expect(getByText(/Car/i)).toBeInTheDocument();
  expect(getByText(/Goat/i)).toBeInTheDocument();
});
