import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: 0;    
    align-items: center;
    justify-content: horizontal;
    background-color: ${theme.colors.background};
    border: 1px solid ${theme.colors.lightBorderColor};
    color: ${theme.colors.fontColor};
    cursor: pointer;
    font-weight: 600;
    font-size: 20px;
    height: auto;
    transition: ${theme.transition};
    user-select: none;

    &:before {
      padding-top: 90%;
      content: '';
      float: left;
    }

    &:hover {
      background-color: ${theme.colors.hoverColor}
    }
  `}
`