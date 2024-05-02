import { render, screen } from '@testing-library/react';
import App from './App';

test('link => Reserve a table', () => {
  render(<App />);
  const linkElement = screen.getByText('Reserve a table');
  expect(linkElement).toBeInTheDocument();
});

test('link => Online Menu', () => {
  render(<App />);
  const linkElement = screen.getByText('Online Menu');
  expect(linkElement).toBeInTheDocument();
});
