import React from 'react';
import { getByLabelText, getByRole, render, screen } from '@testing-library/react';
import HomePage from './HomePage';
import { BrowserRouter } from 'react-router-dom'

// test('Home page', () => {
//   const { getByText } = render(<HomePage />);
//   const headingElement = getByText('test1');
//   expect(headingElement).toBeInTheDocument();
// });


describe('HomePage', () => {
  it('renders correctly', () => {
    const { getByText } = render(<HomePage />, {wrapper: BrowserRouter});
    // screen.debug(getByText.HomePage)
    const headingElement = getByText('Test Compoment');
    expect(headingElement).toBeInTheDocument();
  });
});