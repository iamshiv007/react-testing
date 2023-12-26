import { render, screen } from "@testing-library/react"
import Video22 from "../components/Video22"

test("getAllByLabelText", () => {
    render(<Video22/>)

    const inputs = screen.getAllByLabelText("subject")
    for(let i=0; i<inputs.length; i++){
        expect(inputs[i]).toBeInTheDocument()
    }
})