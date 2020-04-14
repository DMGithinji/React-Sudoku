import { createFilledSudoku } from "utils";

describe("createFilledSudoku", () => {
  it("returns a valid sudoku grid", () => {
    const grid = createFilledSudoku();
    for (let row in grid)
      for (let col in grid[row]) {
        expect(grid[row][col]).toBeGreaterThanOrEqual(1);
        expect(grid[row][col]).toBeLessThanOrEqual(9);
      }
  });
});
