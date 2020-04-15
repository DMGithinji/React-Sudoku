import { DefaultTheme } from 'styled-components';
import { BLOCK_COORDS, N } from 'typings';
import { Action, AnyAction } from 'redux';
import * as types from './types';

/**
 * Action to generate a new sudoku grid
 */
export const createGrid = (): Action => ({ type: types.CREATE_GRID });

/**
 * Action to select grid coordinate
 * @param coords
 */
export const selectBlock = (coords: BLOCK_COORDS): AnyAction => ({
  coords,
  type: types.SELECT_BLOCK,
})

/**
 * Action to enter value in a grid coordinate
 * @param value 
 * @param coords 
 */
export const fillBlock = (value: N, coords: BLOCK_COORDS): AnyAction => ({
  coords,
  value,
  type: types.FILL_BLOCK
})

/**
 * Action that toggles app theme between dark and light modes
 * @param selectedTheme
 */
export const toggleTheme = (selectedTheme: DefaultTheme):AnyAction => ({
  selectedTheme,
  type: types.TOGGLE_THEME
})