import { render, screen } from '@testing-library/react';
import App from './App';

test('test for first react app', () => {
  render(<App />)
  const appText = screen.getByText(/First REACT App/i)

  expect(appText).toBeInTheDocument();

});

test('test for about text', () => {
  render(<App />)
  const aboutText = screen.getByText("This project made for to learn testing in a react application")
  expect(aboutText).toBeInTheDocument();
});

test('test for react logo Image', () => {
  render(<App />)
  const reactLogo = screen.getByTitle("React logo image")
  expect(reactLogo).toBeInTheDocument()
});
