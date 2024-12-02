import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './router/router';
import './styles/index.css';
import { GameContextProvider } from 'context/GameContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GameContextProvider>
      <RouterProvider router={router} />
    </GameContextProvider>
  </React.StrictMode>
);