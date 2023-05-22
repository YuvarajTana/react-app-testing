import { render, screen } from "@testing-library/react";
import HelloWorld from "./HelloWorld";

test('Component should render Hello World text', () => {
  render(<HelloWorld />)
  expect(screen.getByRole('helloText')).toHaveTextContent('Hello World');
  // screen.getByText('Hello World'); // Exact match 
});

