import * as React from 'react';
import { createRoot } from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { GlobalProvider } from './providers/GlobalState';
import Apollo from './providers/Apollo';
import theme from './theme';
import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <GlobalProvider>
      <Apollo>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </Apollo>
    </GlobalProvider>
  </React.StrictMode>,
);
