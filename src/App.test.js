import { screen, render } from '@testing-library/react';
import App from './App';

test('Render a component and should display welcome message ', () => {
  
  // Arranging test 
  render(<App />)
  
  // Act 
  const paragraphElement = screen.getByText(/Welcome to testing/i);

  // Assert
  expect(paragraphElement).toBeInTheDocument();
  expect(paragraphElement.textContent).toEqual('Hello, Welcome to testing KT session');

});