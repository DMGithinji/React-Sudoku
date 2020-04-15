import React, { FC, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch, AnyAction } from "redux";
import { IReducer, toggleTheme } from "reducers";
import { DefaultTheme } from "styled-components";
import { darkTheme, lightTheme } from "styles";
import { Button } from "components/styles";

const ToggleTheme: FC = () => {
  interface IState {
    currentTheme: DefaultTheme;
  }
  const state = useSelector<IReducer, IState>(({ appTheme }) => ({
    currentTheme: appTheme
  }));
  const dispatch = useDispatch<Dispatch<AnyAction>>();
  const changeTheme = useCallback(() => {
    if (state.currentTheme === darkTheme) {
      dispatch(toggleTheme(lightTheme));
    } else {
      dispatch(toggleTheme(darkTheme));
    }
  }, [dispatch, state.currentTheme]);
  return (
    <Button onClick={changeTheme}>
      {state.currentTheme === darkTheme ? (
        <span>Light Mode</span>
      ) : (
        <span>Dark Mode</span>
      )}
    </Button>
  );
};

export default ToggleTheme;
