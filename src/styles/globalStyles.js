import { createGlobalStyle } from 'styled-components';
import * as variables from '../styles/variables';

export const GlobalStyles = createGlobalStyle`
/* CSS RESET */
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
/* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    body {
        
        color: ${variables.colors.black};
        font-family: 'Montserrat', sans-serif;
        letter-spacing: .6px;
    }
    a {
        text-decoration: none;
        color: inherit;
        user-select: none;
    }
    ::placeholder {
        font-family: 'Montserrat', sans-serif;
    }
    button {
        font-family: 'Montserrat', sans-serif;
    }
    textarea {
        font-family: 'Montserrat', sans-serif;
    }
/* TYPOGRAPHY */
    h1 {
        font-size: 40px;
        @media ${variables.query.lg} {
            font-size: 35px;
        }
        @media ${variables.query.md} { 
            font-size: 30px;
        }
        @media ${variables.query.sm} { 
            font-size: 25px;
        }
    }
    h2 {
        font-size: 35px;
        @media ${variables.query.lg} {
            font-size: 30px;
        }
        @media ${variables.query.md} { 
            font-size: 25px;
        }
        @media ${variables.query.sm} { 
            font-size: 20px;
        }
    }
    h3 {
        font-size: 30px;
        @media ${variables.query.lg} {
            font-size: 25px;
        }
        @media ${variables.query.md} { 
            font-size: 20px;
        }
        @media ${variables.query.sm} { 
            font-size: 18px;
        }
    }
    h4 {
        font-size: 25px;
    }
    h5 {
        font-size: 20px;
    }
`;
