// WelcomeComponent.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import WelcomeComponent from './WelcomeComponent';

test('renders welcome message', () => {
  // Arrange
  render(<WelcomeComponent />);

  // Act
  // No action needed for this simple component

  // Assert
  const welcomeHeading = screen.getByText(/Welcome to My React App/i);
  const thanksParagraph = screen.getByText(/Thanks for visiting/i);

  expect(welcomeHeading).toBeInTheDocument();
  expect(thanksParagraph).toBeInTheDocument();
});
