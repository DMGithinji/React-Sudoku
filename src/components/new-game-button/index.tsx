import React, { FC, useCallback } from "react";
import { Button } from "components";
import { useDispatch } from "react-redux";
import { createGrid } from "reducers";
import { Dispatch, Action } from "redux";

const NewGameButton: FC = () => {

  const dispatch = useDispatch<Dispatch<Action>>()
  const newGame = useCallback(() => {
    if (window.confirm('Are you sure you want to start a new game?')) {
      dispatch(createGrid())
    }
  }, [dispatch])
  return <Button onClick={newGame}>New Game</Button>;
};

export default NewGameButton;
