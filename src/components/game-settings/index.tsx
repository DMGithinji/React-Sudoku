import React, { FC } from "react";
import { Container } from "./styles";
import NewGameButton from "./new-game-button";
import ToggleTheme from "./toggle-theme";

const GameSettings: FC = () => (
  <Container>
    <NewGameButton />
    <ToggleTheme />
  </Container>
);

export default GameSettings;
