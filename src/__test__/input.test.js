import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";

beforeEach(() => {
    console.log("hello this is before each tetsing")
})

test("test for input field", () => {
    render(<App />)

    const inputField = screen.getByPlaceholderText(/This is demo input box/)
    const inputFieldByRole = screen.getByRole("textbox")

    expect(inputField).toBeInTheDocument()
    expect(inputFieldByRole).toBeInTheDocument()

    fireEvent.change(inputField, { target: { value: "a" } })

    expect(inputField.value).toBe("atest")
})

test("test for button click", () => {
    render(<App />)
    const button = screen.getByRole("button")

    const notClickedText = screen.getByText("Button not clicked")
    expect(notClickedText).toBeInTheDocument()
    fireEvent.click(button)

    const clickedText = screen.getByText("Button clicked")
    expect(clickedText).toBeInTheDocument()
})

afterEach(() => {
    console.log("Hello this is after each test")
})

test("snapshot for app component", () => {
    const container = render(<App />)
    expect(container).toMatchSnapshot()
})