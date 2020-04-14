import React, { FC, useEffect, Dispatch, useCallback } from 'react';
import { Container, Row } from './styles';
import Block from './block';
import { useDispatch } from 'react-redux';
import { createGrid } from 'reducers';
import { AnyAction } from 'redux';
import { INDEX } from 'typings';

const Grid: FC = () => {
  const dispatch = useDispatch<Dispatch<AnyAction>>();
  const create = useCallback(() => dispatch(createGrid()), [dispatch]);
  useEffect(() => {
    create();
  }, [create]);

  return (
    <Container data-cy="grid-container">
      {React.Children.toArray(
        [...Array(9)].map((_, rowIndex) => (
          <Row data-cy="grid-row-container">
            {React.Children.toArray(
              [...Array(9)].map((_, colIndex) => (
                <Block 
                  rowIndex={rowIndex as INDEX} 
                  colIndex={colIndex as INDEX} />
              ))
            )}
          </Row>
        ))
      )}
    </Container>
  );
};

export default Grid;
