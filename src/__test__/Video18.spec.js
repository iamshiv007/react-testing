import { render, screen } from "@testing-library/react"
import Video18 from "../components/Video18"


test("getByRole query", () => {
    render(<Video18/>)

    let input = screen.getByRole("textbox")
    let btn = screen.getByRole("button")

    expect(input).toBeInTheDocument()
    expect(input).toHaveValue("hello")
    expect(input).toBeDisabled()
    expect(btn).toBeInTheDocument()
})