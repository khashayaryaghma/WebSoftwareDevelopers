import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Barlow', sans-serif;
    box-sizing: border-box;
  }
  a{
    text-decoration: none;
  }
  .heading{
    font-size: 55px;
  }
  .para{
    font-size: 22px;
  }
`;
