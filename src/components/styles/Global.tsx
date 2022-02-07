import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        margin: 0;
        font-family: 'Nunito Sans', sans-serif;
        font-size: 14px;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        line-height:25px;
    }
`;

export default GlobalStyles;
