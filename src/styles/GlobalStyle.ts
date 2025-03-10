import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --blue: #0500FF;
        --background: #F0F0F0;
    }
    body {
        font-family: 'Helvetica Neue', sans-serif;
        background: var(--background);
    }
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
    }
`

export default GlobalStyle