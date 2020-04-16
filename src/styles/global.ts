import { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle`
${({ theme }) => css`
  html {
    height: 100vh;

    body {
      display: flex;
      flex-direction: column;
      height: 100vh;
      margin: 0;
      background-color: ${theme.colors.background};
      color: ${theme.colors.fontColor};

      span {
        color: red;
        font-weight: bold;
        font-size: 18px;
        margin: 0 4px;
      }

      #root {
        display: flex;
        font-family: sans-serif;
        height: 100vh;
        justify-content: center;
        padding: 15px;
      }
    }
  }
`}
`;
