import { createBrowserRouter } from 'react-router-dom';
import App from 'App';
import ErrorPage from 'pages/ErrorPage/ErrorPage';
import About from 'pages/About/About';
import Game from 'pages/Game/Game';
import HowTo from 'pages/HowTo/HowTo';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "about",
        element: <About />
      },
      {
        index: true,
        element: <Game />
      },
      {
        path: "how-to",
        element: <HowTo />
      },
      {
        path: "*",
        element: <ErrorPage />
      },
    ]
  }
]);

export default router;