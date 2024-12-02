import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    ::-webkit-scrollbar {
      width: 10px;
    }
    ::-webkit-scrollbar-track {
      background: transparent;
    }
    ::-webkit-scrollbar-thumb {
      background: #bbc7ed;
      border-radius: 2px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #98a6d7;
    }
    font-family: "Roboto", BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  html,
  body {
    color: ${({ theme }) => theme.colors?.text?.dark};
    padding: 0;
    margin: 0;
    scroll-behavior: smooth;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
