import { fireEvent, render, screen } from "@testing-library/react";
import App from "./Jest Test 1/App";
import TextJest from "./Jest Test 1/textJest";
import Input from "./Jest Test 1/Input";

describe(" text.Jest file test Group", () => {
  test("Test TextJest Component", () => {
    render(<TextJest />);

    const textHello = screen.getByText(/hello/i);

    expect(textHello).toBeInTheDocument();
  });
});

describe("Input Js file Tests Group", () => {
  test("text Input field", () => {
    render(<Input />);
    const checkInput = screen.getByRole("textbox");
    // const placeholderTxt = screen.getByPlaceholderText();
    expect(checkInput).toHaveAttribute("type", "text");
    // expect(placeholderTxt).toBeInTheDocument("Hello from g");
    expect(checkInput).toHaveAttribute("placeholder", "Hello from hg");
  });

  test("Test Onchange Event", () => {
    render(<Input />);

    const input = screen.getByRole("textbox");

    fireEvent.change(input, { target: { value: "a" } });

    expect(input.value).toBe("a");
  });
});
