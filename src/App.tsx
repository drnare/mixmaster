import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { Events } from './features/events/Events';
import { GlobalStyle } from './GlobalStyle';
import { theme } from './theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Events />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
