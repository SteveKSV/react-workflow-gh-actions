import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom/extend-expect';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders the logo', () => {
  render(<App />);
  const logo = screen.getByAltText('logo');
  expect(logo).toBeInTheDocument();
});

test('has a link to the React website', () => {
  render(<App />);
  const link = screen.getByRole('link', { name: /learn react/i });
  expect(link).toHaveAttribute('href', 'https://reactjs.org');
});