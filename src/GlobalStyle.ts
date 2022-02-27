import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle(
  ({ theme }) => css`
    * {
      box-sizing: border-box;
    }

    body,
    h1,
    h2,
    h3,
    h4,
    p,
    figure,
    blockquote,
    ul,
    ol,
    table,
    tr,
    td,
    th {
      margin: 0;
      padding: 0;
    }

    ul,
    ol {
      list-style: none;
    }

    body {
      background: ${theme.colors.background.primary};
      min-height: 100vh;
      line-height: 1.5;
    }

    table,
    tr,
    td,
    th {
      border: 0;
    }

    img,
    picture {
      max-width: 100%;
      display: block;
    }

    input,
    button,
    textarea,
    select {
      font: inherit;
    }
  `
);
