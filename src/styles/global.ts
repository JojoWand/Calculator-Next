import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*, input, button {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
  margin: 0;
}

input, button {
  padding: 2px;
}
body, html {
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  font-family: 300 16px Roboto, sans-serif;
  height: 100vh;
  width: 100vw;
}
`;
