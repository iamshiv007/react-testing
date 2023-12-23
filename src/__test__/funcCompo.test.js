import { fireEvent, render, screen } from "@testing-library/react"
import FuncCompo from "../funcCompo"
import { getUserList } from "../getUserList"


test("function component testing", () => {
    render(<FuncCompo />)
    const btn = screen.getByTestId("btn1")
    fireEvent.click(btn)
    expect(screen.getByText("hello")).toBeInTheDocument()
})

test("test getUserList function", () => {
    render(<app />)

    expect(getUserList()).toBe("user list")
})