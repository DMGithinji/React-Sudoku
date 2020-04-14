import { GRID } from "typings";

/**
 * Check if the grid is filled with numbers between 1-9
 * @param grid A 9x9 Sudoku grid
 */
function isGridFull(grid: GRID): boolean {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (grid[i][j] === 0) {
        return false;
      }
    }
  }
  return true;
}

export default isGridFull;
