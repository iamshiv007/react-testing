import { render, screen } from "@testing-library/react"
import Video21 from "../components/Video21"


test("getByLabelText", () => {
    render(<Video21 />)

    const input = screen.getByLabelText("Fullname")
    const checkbox = screen.getByLabelText("Male")
    expect(input).toBeInTheDocument()
    expect(input).toHaveValue("Shivraj Gurjar")
    expect(checkbox).toBeInTheDocument()
    expect(checkbox).toBeChecked()
})