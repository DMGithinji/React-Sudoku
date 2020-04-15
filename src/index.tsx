import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { unregister, configureStore } from "core";
import { GlobalStyles, darkTheme } from "styles";
import { Content, Title, Card, Grid, Numbers } from "components";
import { ThemeProvider } from "styled-components";

const store = configureStore()

ReactDOM.render(
  <ThemeProvider theme={darkTheme}>
    <GlobalStyles />
    <Provider store={store}>
      <Content data-cy="content">
        <Title data-cy="title">Sudoku</Title>
        <Card data-cy="card">
          <Grid />
          <Numbers />
        </Card>
      </Content>
    </Provider>
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
unregister();
