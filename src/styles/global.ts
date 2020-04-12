import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html {
    height: 100vh;

    body {
      display: flex;
      flex-direction: column;
      height: 100vh;
      margin: 0;

      #root {
        background-color: #fff;
        color: #282c34;
        display: flex;
        font-family: sans-serif;
        height: 100vh;
        justify-content: center;
        padding: 15px;
      }
    }
  }
`
