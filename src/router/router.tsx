import { createBrowserRouter } from 'react-router-dom';
import App from 'App';
import Error from 'pages/Error/Error';
import About from 'pages/About/About';
import Game from 'pages/Game/Game';
import HowTo from 'pages/HowTo/HowTo';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
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
        path: "howTo",
        element: <HowTo />
      },
    ]
  }
]);

export default router;