import { verifyCell } from "./testing-functions.js"

//the function must return dead cell if the number of living neighbours is less than two
//so the test should cause a fail if the number of living neighbours is less than two and the function returns a live cell
//the testing input should be 1

describe("live cell", () => {
    it("has 1 neighbour, it dies", () => {
        const result = verifyCell("1");
        expect(result).toBe(false);
    })
    it("has 2 neighbours, it lives", () => {
        const result = verifyCell(2);
        expect(result).toBe(true);
    })
    it("has 3 neighbours, it lives", () => {
        const result = verifyCell(3);
        expect(result).toBe(true);
    })
    it("has 4 neighbours, it dies", () => {
        const result = verifyCell(4);
        expect(result).toBe(false);
    })
    it("has 2 live neighbours, it survives this generation", () => {
        const result = verifyCell(2);
        expect(result).toBe(true);
    })
})

describe("dead cell", () => {
    it("is dead with 2 neighbours, it stays dead", () => {
        const result = verifyCell(false, 2);
        expect(result).toBe(true);
    })
})