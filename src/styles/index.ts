import { createGlobalStyle } from "styled-components";
import { normalize } from "polished";

const GlobalStyles = createGlobalStyle`
    ${normalize()}
 
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    :root {
        font-size: 60%;
        --sm: 640px;
        --md: 768px;
        --indigo-100: #EBF4FF;
        --indigo-200: #C3DAFE;
        --indigo-300: #A3BFFA;
        --indigo-400: #7F9CF5;
        --indigo-500: #667EEA;
        --indigo-600: #5A67D8;
        --indigo-700: #4C51BF;
        --indigo-800: #434190;
        --indigo-900: #3C366B;
        --gray-100: #F7FAFC;
        --gray-200: #EDF2F7;
        --gray-300: #E2E8F0;
        --gray-400: #CBD5E0;
        --gray-500: #A0AEC0;
        --gray-600: #718096;
        --gray-700: #4A5568;
        --gray-800: #2D3748;
        --gray-900: #1A202C;
        --white: #FFF;
    }

    html,
    body {
        font-family: 'Open Sans', sans-serif;
        font-size: 1.6rem;
        line-height: 1.5;
    }

    body,
    #root {
        height: 100vh;
        color: var(--gray-900);
        background: var(--gray-100);
    }

    ul {
        list-style: none;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    button {
        padding: 0;
        color: inherit;
        cursor: pointer;
        background: transparent;
        border: 0;
        outline: none;
    }
`;

export default GlobalStyles;
