import React, { FC, Dispatch } from "react";

import { Container } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { IReducer, selectBlock } from "reducers";
import { N, INDEX } from "typings";
import { AnyAction } from "redux";

interface IProps {
  colIndex: INDEX;
  rowIndex: INDEX;
}

interface IState {
  isActive: boolean; // Active Block
  value: N; // User input value
  isPuzzleValue: boolean; // Part of original puzzle
}

const Block: FC<IProps> = ({ colIndex, rowIndex }) => {
  const state = useSelector<IReducer, IState>(
    ({ workingGrid, challengeGrid, selectedBlock }) => ({
      isActive: selectedBlock
        ? selectedBlock[0] === rowIndex && selectedBlock[1] === colIndex
        : false,
      value: workingGrid ? workingGrid[rowIndex][colIndex] : 0,
      isPuzzleValue:
        challengeGrid && challengeGrid[rowIndex][colIndex] !== 0 ? true : false
    })
  );
  const dispatch = useDispatch<Dispatch<AnyAction>>();

  function handleClick() {
    if (!state.isActive) dispatch(selectBlock([rowIndex, colIndex]));
  }

  return (
    <Container
      active={state.isActive}
      isPuzzleValue={state.isPuzzleValue}
      data-cy={`block-${rowIndex}-${colIndex}`}
      onClick={handleClick}
    >
      {state.value === 0 ? "" : state.value}
    </Container>
  );
};

export default Block;
