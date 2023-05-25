import { fireEvent, queryByText, render, screen } from "@testing-library/react";
import UserInput from "./UserInput";

test('Should render text filed and Submit button ', async () => {

  render(<UserInput />);

  // Rendering Text Filed and Button
  const userInputField = screen.getByRole('textbox');
  expect(userInputField).toBeInTheDocument();
  const submitButton = screen.getByRole('button');
  expect(submitButton).toBeInTheDocument();
  expect(submitButton).toHaveTextContent('Submit');

  expect(userInputField.textContent).toEqual('');


  // Should be able fire event and accept only phone number 
  await fireEvent.change(userInputField, { target : { value: "8008729224" }});
  expect(userInputField.value).toBe('8008729224');

  // Click on submit button
  fireEvent.click(submitButton);
  expect(screen.queryByText(/successfully/i).textContent).toBe('You logged in successfully')

});


