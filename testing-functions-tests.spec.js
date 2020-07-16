import { verifyCell } from "./testing-functions.js"

//the function must return dead cell if the number of living neighbours is less than two
//so the test should cause a fail if the number of living neighbours is less than two and the function returns a live cell
//the testing input should be 1

describe("cell", () => {
    it("has 1 neighbour, it fails", () => {
        const result = verifyCell("1");
        expect(result).toBe(false);
    })
})