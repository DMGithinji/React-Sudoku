import React from 'react';
import ReactDOM from 'react-dom';

import { unregister } from './core';
import { GlobalStyles, darkTheme } from './styles';
import { Content, Title, Card, Grid } from './components';
import { ThemeProvider } from 'styled-components';

ReactDOM.render(
  <ThemeProvider theme={darkTheme}>
    <GlobalStyles />
    <Content data-cy="content">
      <Title data-cy="title">Sudoku</Title>
      <Card data-cy="card">
        <Grid />
      </Card>
    </Content>
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
unregister();
