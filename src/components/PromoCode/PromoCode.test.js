import { render, screen, fireEvent } from "@testing-library/react";
import PromoCode from "./PromoCode";

/*
  
  1. First time visiting the page, show text field with disabled button with Apply text
  2. On Adding promo code, make button enabled with Apply text
  3. On click submit button and successfully API response turn button text to Applied
  4. Already applied a promo code then visiting a page, show promo code with Applied button

*/


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

  // ASSERT
  expect(inputElement.value).toEqual('DIWALI200');
  expect(buttonElement).toBeEnabled();
  expect(buttonElement.textContent).toBe('Apply')

});


test('On click submit button and successfully API response turn button text to Applied', async () => {
    // Arrange 
    render(<PromoCode />);

    // Act
    const inputElement = screen.getByRole('textbox');
    await fireEvent.change(inputElement, {target: { value: "SAMPLE" }});

    const buttonElement = screen.getByRole('button');
    await fireEvent.click(buttonElement);

    //ASSERT
    expect(buttonElement).toBeInTheDocument();
});

test('Passing promo as prop and it should show promo code with Applied button', () => {

    // Arrange 
    render(<PromoCode promo={'GAPYOFF200'}/>);

    // Act
    const inputElement = screen.getByRole('textbox');
    const buttonElement = screen.getByRole('button');

    //ASSERT
    expect(inputElement.value).toBe('GAPYOFF200');
    expect(buttonElement.textContent).toBe('Applied');
    
});