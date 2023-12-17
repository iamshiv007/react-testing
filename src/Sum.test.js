import { Sum } from "./Sum";

test("testing for sum function", () => {
    let a = 20;
    let b = 40;
    let output = 60;
    expect(Sum(a, b)).toBe(output)
})