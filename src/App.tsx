import React from 'react';
import ReactDOM from 'react-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { ThemeProvider } from 'styled-components';
import { Error } from './features/error';
import { Events } from './features/events/Events';
import { GlobalStyle } from './GlobalStyle';
import { theme } from './theme';

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={Error}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Events />
      </ThemeProvider>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
);
