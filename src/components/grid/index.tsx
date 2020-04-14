import React, { FC } from "react";
import { GRID } from "typings";
import { Container, Row } from "./styles";
import Block from "./block";
import { createFilledSudoku } from "utils";

const Grid: FC = () => {
  //Stuff on the way

  const grid: GRID = createFilledSudoku();
  console.log(grid);

  return (
    <Container data-cy="grid-container">
      {React.Children.toArray(
        [...Array(9)].map((_, rowIndex) => (
          <Row data-cy="grid-row-container">
            {React.Children.toArray(
              [...Array(9)].map((_, colIndex) => (
                <Block rowIndex={rowIndex} colIndex={colIndex} />
              ))
            )}
          </Row>
        ))
      )}
    </Container>
  );
};

export default Grid;
