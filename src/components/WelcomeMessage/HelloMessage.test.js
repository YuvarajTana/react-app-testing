import HelloMessage from "./HelloMessage";
import { render, screen } from "@testing-library/react";


test(' Component should take prop and render with welcome message', () => {
  // Select 
  render(<HelloMessage name={'Praveen'} />)
  
  // Act
  const renderedValue = screen.getByRole('helloText').textContent;


  // Assert 
  expect(renderedValue).toBe('Hello,Praveen welcome to Moneyview');

});