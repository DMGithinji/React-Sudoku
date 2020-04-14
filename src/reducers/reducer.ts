import { AnyAction } from 'redux';
import { createFilledSudoku } from 'utils';
import { IReducer } from './interfaces';
import * as types from './types';


const initialState: IReducer = {};

function reducer(state = initialState, action: AnyAction) {
  switch (action.type) {
    case types.CREATE_GRID:
      return {
        ...state,
        grid: createFilledSudoku(),
      }
    case types.SELECT_BLOCK:
      return {
        ...state,
        selectedBlock: action.coords,
      }
    default:
      return state;
  }
}

export default reducer;
