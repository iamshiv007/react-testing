import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";

test("test for input field", () => {
    render(<App />)

    const inputField = screen.getByPlaceholderText(/This is demo input box/)
    const inputFieldByRole = screen.getByRole("textbox")

    expect(inputField).toBeInTheDocument()
    expect(inputFieldByRole).toBeInTheDocument()

    fireEvent.change(inputField, { target: { value: "a" } })

    expect(inputField.value).toBe("atest")
})