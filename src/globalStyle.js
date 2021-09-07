import { createGlobalStyle } from "styled-components";
import AgrandirGrandHeavyy from './assets/fonts/AgrandirGrandHeavy-800.woff'
import AmsterdamFour from './assets/fonts/AmsterdamFour_ttf.woff'

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    
    @font-face {
        font-family: 'Agrandir Grand Heavyy';
        src: url(${AgrandirGrandHeavyy}) format('woff');
        font-style: normal;
        font-display: swap;
    }
    
    @font-face {
        font-family: 'Amsterdam Four';
        src: url(${AmsterdamFour}) format('woff');
        font-style: normal;
        font-display: swap;
    }

    html {
        --color-primary: #FCF2E3;
        --color-primary-dark: #F5DFBC;
        --color-text-primary: #68664c;

        height: 100%;
        scroll-behavior: smooth;
    }

    * {
        box-sizing: border-box;
    }

    // Debugging
    
    /* * { outline: 2px dotted red }
    * * { outline: 2px dotted green }
    * * * { outline: 2px dotted orange }
    * * * * { outline: 2px dotted blue }
    * * * * * { outline: 1px solid red }
    * * * * * * { outline: 1px solid green }
    * * * * * * * { outline: 1px solid orange }
    * * * * * * * * { outline: 1px solid blue } */

    body {
        margin: 0;
        font-family: 'Montserrat', sans-serif;
        user-select: none;
    }

    img {
        user-drag: none;
    }
`;
 
export default GlobalStyle;