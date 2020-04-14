import { SQUARE, GRID } from "typings";

interface IInput {
  grid: GRID;
  row: number;
  col: number;
}

/**
 * Identifies and returns the working square section within a grid given a row index an
 * @param input Object with 9x9 grid, row index & column grid
 */
function identifyWorkingSquare({ col, grid, row }: IInput) {
  const square = [];

  // First row and its columns
  if (row < 3) {
    if (col < 3)
      for (let x = 0; x < 3; x++)
        square.push([grid[x][0], grid[x][1], grid[x][2]]);
    else if (col < 6)
      for (let x = 0; x < 3; x++)
        square.push([grid[x][3], grid[x][4], grid[x][5]]);
    else
      for (let x = 0; x < 3; x++)
        square.push([grid[x][6], grid[x][7], grid[x][8]]);
  }
  // Second row and its columns
  else if (row < 6) {
    if (col < 3)
      for (let x = 3; x < 6; x++)
        square.push([grid[x][0], grid[x][1], grid[x][2]]);
    else if (col < 6)
      for (let x = 3; x < 6; x++)
        square.push([grid[x][3], grid[x][4], grid[x][5]]);
    else
      for (let x = 3; x < 6; x++)
        square.push([grid[x][6], grid[x][7], grid[x][8]]);
  }
  // Third row and its columns
  else {
    if (col < 3)
      for (let x = 6; x < 9; x++)
        square.push([grid[x][0], grid[x][1], grid[x][2]]);
    else if (col < 6)
      for (let x = 6; x < 9; x++)
        square.push([grid[x][3], grid[x][4], grid[x][5]]);
    else
      for (let x = 6; x < 9; x++)
        square.push([grid[x][6], grid[x][7], grid[x][8]]);
  }
  return square as SQUARE;
}

export default identifyWorkingSquare;
