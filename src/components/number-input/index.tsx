import React, { FC } from "react";
import { NUMBERS } from "typings";
import { Container } from "./styles";
import ButtonInput from "./button-input";

const NumbersInput: FC = () => (
  <Container>
    {([1, 2, 3, 4, 5, 6, 7, 8, 9] as NUMBERS[]).map(value => (
      <ButtonInput key={value} value={value}>{value}</ButtonInput>
    ))}
  </Container>
);

export default NumbersInput;
