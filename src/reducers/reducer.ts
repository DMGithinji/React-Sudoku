import { GRID } from "typings";
import { AnyAction } from "redux";
import {
  createFilledSudoku,
  removeNumbers,
  copyGrid,
  compareArrays
} from "utils";
import { IReducer } from "./interfaces";
import * as types from "./types";

const initialState: IReducer = {};

function reducer(state = initialState, action: AnyAction) {
  switch (action.type) {
    case types.CREATE_GRID:
      const solvedGrid = createFilledSudoku();
      const gridCopy = copyGrid(solvedGrid);
      const challengeGrid = removeNumbers(gridCopy);
      const workingGrid = copyGrid(challengeGrid);
      return {
        ...state,
        solvedGrid,
        challengeGrid,
        workingGrid
      };
    case types.SELECT_BLOCK:
      return {
        ...state,
        selectedBlock: action.coords
      };
    case types.FILL_BLOCK:
      if (state.workingGrid && state.solvedGrid) {
        if (
          state.solvedGrid[action.coords[0]][action.coords[1]] !== action.value
        ) {
          alert("Incorrect input! Are you guessing?");
          return state;
        }
        state.workingGrid[action.coords[0]][action.coords[1]] = action.value;
        if (compareArrays(state.workingGrid, state.solvedGrid)) {
          alert("COMPLETED");
          return {
            ...state,
            workingGrid: [...state.workingGrid] as GRID
          };
        }
      }
      return state;

    default:
      return state;
  }
}

export default reducer;
