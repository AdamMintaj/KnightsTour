import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './router/router';
import './styles/index.css';
import { ThemeProvider } from '@emotion/react';
import theme from 'styles/theme';
import { GameContextProvider } from 'context/GameContext';

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