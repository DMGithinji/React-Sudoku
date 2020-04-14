import { NUMBERS, GRID } from "typings";


interface IInput {
  col: number
  grid: GRID
  value: NUMBERS
}

/**
 * Determines if a given number is within a grids column
 * @param value
 * @param col
 * @param grid
 */
function isInCol ({ col, grid, value }: IInput): boolean {
  for (let i = 0; i < 9; i++) {
    if (value === grid[i][col]) return true;
  }
  return false;
};

export default isInCol;
