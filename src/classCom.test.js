import reactTestRenderer from "react-test-renderer"
import ClassCom from "./ClassCom"

test("test a function of a class component", () => {
    const componentData = reactTestRenderer.create(<ClassCom />).getInstance()
    let a = "test";
    let b = "extraText"
    expect(componentData.getUserList(a, b)).toMatch(a + b)
})