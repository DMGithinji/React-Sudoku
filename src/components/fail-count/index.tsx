import React, { FC } from "react"
import { Container } from "./styles";
import { useSelector } from "react-redux";
import { IReducer } from "reducers";

interface IState {
  failCount: number
}

const FailCount: FC = () => {
  const state = useSelector<IReducer, IState>(
    ({ failCount}) => ({ failCount})
  )

  return (
  <Container>
    {([...Array(state.failCount)]).map((e, i) => (
      <span> X </span>
    ))}
  </Container>
  )
}

export default FailCount;