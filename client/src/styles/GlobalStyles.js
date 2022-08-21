import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Barlow&display=swap');
  * {
    margin: 0;
    padding: 0;
    font-family: 'Barlow', sans-serif;
    box-sizing: border-box;
  }
  a{
    text-decoration: none;
  }
`;
