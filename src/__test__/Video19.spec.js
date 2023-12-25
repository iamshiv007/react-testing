import { render, screen } from "@testing-library/react"
import Video19 from "../components/Video19"


test("multiple element with getByRole and custom role", () => {
    render(<Video19 />) 

    let input1 = screen.getByRole("textbox", { name: "username" })
    let input2 = screen.getByRole("textbox", { name: "password" })
    let btn1 = screen.getByRole("button", { name: "Click 1" })
    let btn2 = screen.getByRole("button", { name: "Click 2" })
    let divEle = screen.getByRole("divTag")
    expect(input1).toBeInTheDocument()
    expect(input2).toBeInTheDocument()
    expect(btn1).toBeInTheDocument()
    expect(btn2).toBeInTheDocument()
    expect(divEle).toBeInTheDocument()

})