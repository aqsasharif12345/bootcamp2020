import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders hello world', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Hello/i);
  expect(linkElement).toBeInTheDocument();
});

test('find input with placeholder', () => {
  const renderResponse = render(<App/>)
  const worldElement = renderResponse.getByPlaceholderText(//i);
  expect(worldElement).toBeInTheDocument();
});