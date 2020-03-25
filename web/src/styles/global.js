import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, ::after, ::before{
    margin: 0px;
    padding: 0px;
    outline: none;
    box-sizing: border-box;
  }
  body {
    background-color: #E9F1F7;
    font: 14px "Roboto";
    color: #444;
  }
`;

export {GlobalStyle};