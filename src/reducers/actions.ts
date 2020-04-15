import { BLOCK_COORDS, N } from 'typings';
import { Action, AnyAction } from 'redux';

import * as types from './types';

export const createGrid = (): Action => ({ type: types.CREATE_GRID });

export const selectBlock = (coords: BLOCK_COORDS): AnyAction => ({
  coords,
  type: types.SELECT_BLOCK,
})

export const fillBlock = (value: N, coords: BLOCK_COORDS): AnyAction => ({
  coords,
  value,
  type: types.FILL_BLOCK
})