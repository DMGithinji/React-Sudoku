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

      #root {
        background-color: ${theme.colors.black};
        color: ${theme.colors.white};
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
