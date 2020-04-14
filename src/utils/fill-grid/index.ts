import { GRID, NUMBERS } from "typings";
import {
  isGridFull,
  shuffle,
  identifyWorkingSquare,
  isInSquare,
  isInCol,
  isInRow
} from "utils";

const numbers: NUMBERS[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

/**
 * A backtracking algorithm - checks all possible combination
 * nos until it finds a combination that is true (solves sudoku)
 * @param grid
 */
function fillGrid(grid: GRID) {
  let row = 0;
  let col = 0;

  for (let i = 0; i < 81; i++) {
    row = Math.floor(i / 9);
    col = i % 9;

    if (grid[row][col] === 0) {
      shuffle(numbers);

      for (let value of numbers) {
        if (!isInRow({ grid, row, value }) && !isInCol({ col, grid, value })) {
          const square = identifyWorkingSquare({ col, grid, row });
          if (!isInSquare({ square, value })) {
            grid[row][col] = value;
            if (isGridFull(grid)) return true;
            else if (fillGrid(grid)) return true;
          }
        }
      }

      break;
    }
  }

  grid[row][col] = 0;
}

export default fillGrid;
