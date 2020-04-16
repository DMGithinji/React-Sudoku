import React, { FC } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import {
  Content,
  Title,
  Card,
  Grid,
  NumbersInput,
  GameSettings,
  FailCount,
} from 'components';
import { GlobalStyles } from 'styles';
import { useSelector } from 'react-redux';
import { IReducer } from 'reducers';


const App: FC = () => {
  interface IState {
    currentTheme: DefaultTheme;
  }
  
  const state = useSelector<IReducer, IState>(({ appTheme }) => ({
    currentTheme: appTheme,
  }));

  return (
    <ThemeProvider theme={state.currentTheme}>
        <GlobalStyles />
        <Content data-cy="content">
          <Title data-cy="title">Sudoku</Title>
          <Card data-cy="card">
            <GameSettings />
            <Grid />
            <NumbersInput />
            <FailCount />
          </Card>
        </Content>
    </ThemeProvider>
  );
};

export default App;
