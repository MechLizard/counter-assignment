import React from "react";
import {fireEvent, render, screen} from "@testing-library/react";
import Counter from "../components/Counter";
import userEvent from "@testing-library/user-event";


beforeEach(() => {
  // Render the Counter component here
    render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
    const counterMessage = screen.getByText("Counter");
    expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
    const counterElement = screen.getByTestId("count");
    expect(counterElement).toBeInTheDocument();
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
    const increaseButton = screen.getByText("+");
    const counterElement = screen.getByTestId("count");

    userEvent.click(increaseButton);
    expect(counterElement).toHaveTextContent("1");
});

test('clicking - decrements the count', () => {
    const decreaseButton = screen.getByText("-");
    const counterElement = screen.getByTestId("count");

    userEvent.click(decreaseButton);
    expect(counterElement).toHaveTextContent("-1");
});
