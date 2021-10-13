import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --white: #ffffff;

  --gray-50: #F1EFEF;
  --gray-100: #e1e1e6;
  --gray-200: #BFBFBF;
  --gray-300: #a8a8b3;
  --gray-700: #323238;
  --gray-800: #29292e;
  --gray-850: #1f2729;
  --gray-900: #121214;

  --cyan-500: #61dafb;
  --yellow-500: #eba417;

  --primary: #DB63D6;
}

@media (max-width: 1080px) {
  html {
    font-size: 93.75%;
  }
}

@media (max-width: 720px) {
  html {
    font-size: 87.5%;
  }
}

body {
  background: var(--white);
  color: var(--gray-700);
}

body,
input,
textarea,
select,
button {
  font: 400 1rem -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
}

button {
  cursor: pointer;
}

a {
  color: inherit;
  text-decoration: none;
}
`;
