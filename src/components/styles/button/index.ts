import styled, { css } from "styled-components";

export const Button = styled.button`
  ${({ theme }) => css`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.buttonBackgroundColor};
    border-radius: 2px;
    border: 2px solid ${theme.colors.buttonBorderColor};
    height: 40px;
    /* max-width: 60px; */
    min-height: 40px;
    margin: 4px 2px;
    padding: 0;
    font-size: 16px;
    font-weight: bold;
    color: ${theme.colors.buttonFontColor};
    cursor: pointer;
    transition: ${theme.transition};

    /* &:focus {
      border: 3px solid ${theme.colors.buttonBorderColor};
    } */

    &:hover {
      opacity: 0.95
    }
  `}
`;
