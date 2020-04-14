import { BLOCK_COORDS } from './../typings/index';
import { GRID } from 'typings';

export interface IReducer {
  challengeGrid?: GRID; //grid to be solved
  solvedGrid?: GRID; //solution grid
  workingGrid?: GRID; //current state of grid
  selectedBlock?: BLOCK_COORDS; //currently selected grid
}
