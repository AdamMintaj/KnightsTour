import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { GameContextProvider } from 'context/GameContext';
import { ThemeProvider } from '@emotion/react';
import router from './router/router';
import theme from 'styles/theme';
import './styles/index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GameContextProvider>
        <RouterProvider router={router} />
      </GameContextProvider>
    </ThemeProvider>
  </React.StrictMode>
);