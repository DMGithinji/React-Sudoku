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

const initialState: IReducer = {
  failCount: 0,
  appTheme: "darkTheme"
};

function reducer(state = initialState, action: AnyAction) {
  switch (action.type) {
    case types.CREATE_GRID:
      const solvedGrid = createFilledSudoku();
      const gridCopy = copyGrid(solvedGrid);
      const challengeGrid = removeNumbers(gridCopy, 15);
      const workingGrid = copyGrid(challengeGrid);
      const failCount = 0;
      return {
        ...state,
        solvedGrid,
        challengeGrid,
        workingGrid,
        failCount
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
          const { failCount } = state;
          return {
            ...state,
            failCount: failCount + 1
          };
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
