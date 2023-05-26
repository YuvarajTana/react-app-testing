import { screen, render } from '@testing-library/react';
import App from './App';

test('Render a component and should display welcome message ', () => {
  
  // Arranging test 
  render(<App />)
  
  // Act 
  const paragraphElement = screen.getByTestId('sample');

  // Button - button 


  // Assert
  expect(paragraphElement).toBeInTheDocument();
  expect(paragraphElement.textContent).toEqual('Hello, Welcome to testing KT session');

});

// App.spec.js

// 1. getByTestId - This solves -> data-testid 
// 2. getByText - 
// 3. getByRole - https://www.w3.org/TR/html-aria/#docconformance
// 4. getByLabel - 


// getBY, QueryBy, findBy 
// getAllBy, QueryAllBy, findAllBy 


// On me - Get the list of selectors 
// Matcher functions
// toBe()
// toBeInTheDocument()
// toEqual()
// to