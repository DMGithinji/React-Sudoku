import { DefaultTheme } from 'styled-components';
import { BLOCK_COORDS, GRID } from 'typings';

export interface IReducer {
  appTheme: DefaultTheme //theme of application
  challengeGrid?: GRID; //grid to be solved
  solvedGrid?: GRID; //solution grid
  workingGrid?: GRID; //current state of grid
  selectedBlock?: BLOCK_COORDS; //currently selected grid
  failCount: number //number of times user has entered wrong input
}
