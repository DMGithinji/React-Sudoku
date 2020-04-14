import styled, { css } from 'styled-components';

interface IProps {
  active? : boolean
}
export const Container = styled.div<IProps>`
  ${({ active, theme }) => css`
    display: flex;
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: 0;    
    align-items: center;
    justify-content: center;
    background-color: ${active ? theme.colors.selectedBackground : theme.colors.background};
    border: 1px solid ${theme.colors.lightBorderColor};
    color: ${theme.colors.fontColor};
    color: ${active ? theme.colors.selectedFontColor : theme.colors.fontColor};
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
      background-color: ${active ? theme.colors.selectedBackground : theme.colors.hoverColor};;
      color: ${active ? theme.colors.selectedFontColor : theme.colors.hoverFontColor};
    }
  `}
`