import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
`

export const Row = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-flow: row;

    /* Horizontal main border styling */
    &:nth-child(1) {
      div {
        border-top: solid 5px ${theme.colors.mainBorderColor}
      }
    }
    &:nth-child(4),
    &:nth-child(7) {
      div {
        border-top: solid 4px ${theme.colors.mainBorderColor}
      }
    }
    &:nth-child(9) {
      div {
        border-bottom: solid 5px ${theme.colors.mainBorderColor}
      }
    }

    /* Vertical main border styling */
    div {
      &:nth-child(1)
      {
          border-left: solid 5px ${theme.colors.mainBorderColor}
      }
      &:nth-child(3),
      &:nth-child(6) {
          border-right: solid 4px ${theme.colors.mainBorderColor}
      }
      &:nth-child(9) {
          border-right: solid 5px ${theme.colors.mainBorderColor}
      }
      &:nth-child(4),
      &:nth-child(7),
          border: none
      }
    }
  `}
`
