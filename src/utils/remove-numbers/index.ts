import { INDEX } from './../../typings/index';
import { GRID } from 'typings';
import global from 'global';
import solveGrid from 'utils/solve-grid';


/**
 * Removes numbers from a filled sudoku grid to convert it to a solvable sudoku puzzle
 * Operating principle: Keep removing random nos until grid unsolvable- 
 *                      when unsolvable, return last removed no then continue removing 
 *                      (for x amt of times based on difficulty)
 * @param grid 9X9 filled sudoku grid
 * @param attempts  Determines difficulty -higher no is more difficult
 */
function removeNumbers(grid: GRID, attempts = 10): GRID {
  while (attempts > 0) {
    // Get indexes to aid select random number in grid
    let row = getRandomIndex();
    let col = getRandomIndex();

    // If number in grid selected is empty ('0'),
    // keep checking for new number to make empty
    while (grid[row][col] === 0) {
      row = getRandomIndex();
      col = getRandomIndex();
    }

    // On finding non-empty no,
    // backup value then remove it (make 0)
    const backup = grid[row][col];
    grid[row][col] = 0;

    // Make copy of grid with item removed
    const gridCopy = copyGrid(grid);

    // Reset solveCount then try solve grid
    // with removed value
    global.solveCount = 0;
    solveGrid(gridCopy);

    // If it is not solved return removed number
    // reduce no. of attempts
    if (global.solveCount !== 1) {
      grid[row][col] = backup;
      attempts--;
    }
  }

  return grid;
}


/**
 * Returns a random number from 1 - 9
 */
function getRandomIndex() {
  return Math.floor(Math.random() * 9);
}

/**
 * Makes a copy of a grid
 * @param grid
 */
export function copyGrid(grid: GRID): GRID {
  const gridCopy: GRID = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];

  for (let row: INDEX = 0; row < 9; row++)
    for (let col: INDEX = 0; col < 9; col++)
      gridCopy[row][col] = grid[row][col];

  return gridCopy;
}

export default removeNumbers;
