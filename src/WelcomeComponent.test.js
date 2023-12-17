// WelcomeComponent.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import WelcomeComponent from './WelcomeComponent';

test('renders initial welcome message', async () => {
  // Arrange
  render(<WelcomeComponent />);

  // Assert
  const welcomeHeading = screen.getByText(/Hi there/i);
  const thanksParagraph = screen.getByText(/Thanks for visiting/i);

  expect(welcomeHeading).toBeInTheDocument();
  expect(thanksParagraph).toBeInTheDocument();
});

test('updates welcome message after useEffect', async () => {
  // Arrange
  render(<WelcomeComponent />);

  // Assert
  const welcomeHeading = screen.getByText(/Hi there/i);
  const thanksParagraph = screen.getByText(/Thanks for visiting/i);

  expect(welcomeHeading).toBeInTheDocument();
  expect(thanksParagraph).toBeInTheDocument();
});
