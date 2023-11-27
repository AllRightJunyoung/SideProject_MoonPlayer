import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

body,html {
  
  width: "100%";
  height: "100%";
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0

}
*{
  box-sizing: border-box;
;
}

`;
export default GlobalStyle;
