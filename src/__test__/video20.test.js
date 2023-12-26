import { render, screen } from "@testing-library/react"
import Video20 from "../components/Video20"

test("getAllByRole", () => {
    render(<Video20/>)

    const inputs = screen.getAllByRole("textbox")
    const options = screen.getAllByRole("option")
    for (let i = 0; i < inputs.length; i++) {
        expect(inputs[i]).toBeInTheDocument()
    }
    for (let i = 0; i < options.length; i++) {
        expect(options[i]).toBeInTheDocument()
    }
})