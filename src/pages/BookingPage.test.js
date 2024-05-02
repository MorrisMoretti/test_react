import React from 'react';
import { render, screen } from '@testing-library/react';
import BookingPage from './BookingPage';
import { BrowserRouter } from 'react-router-dom'

test('Booking page', () => {
  // <BrowserRouter>
  // render(<BookingPage />);
  // </BrowserRouter>
  const { getByText } = render(<BookingPage />, {wrapper: BrowserRouter});
  const linkElement = getByText('Anniversary');
  expect(linkElement).toBeInTheDocument();
});