import {
  isGridFull,
  identifyWorkingSquare,
  isInSquare,
  isInRow,
  isInCol,
} from 'utils';
import { GRID, NUMBERS } from 'typings';
import global from 'global';

const numbers: NUMBERS[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

/**
 * A backtracking-recursive function to check all possible
 * valid combinations of numbers in a sudoku grid
 * @param grid A 9X9 array consisting of values from 0-9)
 */
function solveGrid(grid: GRID) {
  let row = 0;
  let col = 0;

  for (let i = 0; i < 81; i++) {
    row = Math.floor(i / 9);
    col = i % 9;

    if (grid[row][col] === 0) {
      for (let value of numbers)
        if (!isInRow({ grid, row, value }) && !isInCol({ col, grid, value })) {
          const square = identifyWorkingSquare({ col, grid, row });
          if (!isInSquare({ square, value })) {
            grid[row][col] = value;
            if (isGridFull(grid)) {
              global.solveCount++;
              break;
            } else if (solveGrid(grid)) return true;
          }
        }
      break;
    }
  }
  grid[row][col] = 0;
}

export default solveGrid;
