import { BLOCK_COORDS } from './../typings/index';
import { GRID } from 'typings';

export interface IReducer {
  grid?: GRID
  selectedBlock? : BLOCK_COORDS
}
