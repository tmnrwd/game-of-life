import { verifyCell } from "./testing-functions.js"

//the function must return dead cell if the number of living neighbours is less than two
//so the test should cause a fail if the number of living neighbours is less than two and the function returns a live cell
//the testing input should be 1

describe("live cell", () => {
    it("has 1 neighbour, it dies", () => {
        const result = verifyCell(1, true);
        expect(result).toBe(false);
    })
    it("has 2 neighbours, it lives", () => {
        const result = verifyCell(2, true);
        expect(result).toBe(true);
    })
    it("has 3 neighbours, it lives", () => {
        const result = verifyCell(3, true);
        expect(result).toBe(true);
    })
    it("has 4 neighbours, it dies", () => {
        const result = verifyCell(4, true);
        expect(result).toBe(false);
    })
})

describe("dead cell", () => {
    it("is dead with 2 neighbours, it stays dead", () => {
        const result = verifyCell(2, false);
        expect(result).toBe(false);
    })
    it("is dead with 3 neighbours, it comes alive", () => {
        const result = verifyCell(3, false);
        expect(result).toBe(true);
    })
    it("is dead with 4 neighbours, it stays dead", () => {
        const result = verifyCell(3, false);
        expect(result).toBe(true);
    })
})