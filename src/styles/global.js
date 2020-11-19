import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        outline: 0;
        border: 0;

        letter-spacing: 0.05rem;

        scroll-behavior: smooth;
    }

    html {
        font-family: Poppins;
        font-size: 0.625rem;
        font-weight: 500;
        line-height: 1;
        
        text-rendering: optimizeLegibility !important;
        -webkit-font-smoothing: antialiased !important;
        user-select:none; 
        -webkit-user-select:none;
    }

    body {

    }

    input, button {
        font-family: Poppins;
    }

    a {
        text-decoration: none;
        color: white;
    }

    ul {
        list-style: none;
    }

    small {
        font-size: 1rem;
    }

    table { 
        border-collapse: collapse;
        text-align: center;
    }

    textarea {
        resize: none;
    }

    img {
        pointer-events: none;
    }
`

export const theme = { 
    colors : {
        primary: 'rgb(255, 75, 0)',
        secondary: 'rgb(255, 50, 0)',
        tertiary: 'rgb(255, 25, 0)',

        grayPrimary: 'rgb(204, 204, 204)',
        graySecondary: 'rgb(153, 153, 153)',
        grayTertiary: 'rgb(102, 102, 102)',
        grayQuaternary: 'rgb(51, 51, 51)'
    }
}