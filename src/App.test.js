import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders empty burger', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Please start adding ingredients/i);
  expect(linkElement).toBeInTheDocument();
});
