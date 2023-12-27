import { render, screen } from "@testing-library/react";
import Video23 from "../components/Video23";

test("getByPlaceholderText and getAllByPlaceholderText", () => {
    render(<Video23/>)

    // const input = screen.getByPlaceholderText("write your name")
    const inputs = screen.getAllByPlaceholderText("write your name")
    // expect(input).toBeInTheDocument()
    for(let i=0; i<inputs.length; i++){
        expect(inputs[i]).toBeInTheDocument()
    }
})