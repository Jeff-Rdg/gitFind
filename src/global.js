import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;

}

body{
    background-color: #1d2128;
}

hr {
    border: 1x solid rgba(229, 229, 229, 0.2);
    background-color: rgba(229, 229, 229, 0.2);
}
`;

export default GlobalStyle;
