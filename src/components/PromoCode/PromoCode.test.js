import { render, screen, fireEvent } from "@testing-library/react";
import PromoCode from "./PromoCode";
import userEvent from "@testing-library/user-event";

// test('Initially render text field and submit button', ()=> {
//   throw new Error('No Tests available');
// });

test('Initially render text field and submit button', ()=> {

  // Arrange 
  render(<PromoCode />);

  // Act 
  const inputElement = screen.getByRole('textbox');
  const buttonElement = screen.getByRole('button');

  expect(inputElement).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toBeDisabled();
});

test('On entering promo code text field should have value and button should be active', async ()=> {

  // Arrange 
  render(<PromoCode />);

  // Act 
  const inputElement = screen.getByRole('textbox');
  const buttonElement = screen.getByRole('button');

  await fireEvent.change(inputElement, { target: { value: "DIWALI200" } });

  expect(inputElement.value).toEqual('DIWALI200');
  expect(buttonElement).toBeEnabled();
  expect(buttonElement.textContent).toBe('Apply')

});


