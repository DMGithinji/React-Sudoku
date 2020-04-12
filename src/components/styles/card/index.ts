import styled, { css } from 'styled-components';

export const Card = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.background};
    display: flex;
    flex: 1;
    flex-direction: column;
    max-height: fit-content;
    padding: 15px;
  `}
`
