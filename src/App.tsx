import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { Outlet } from 'react-router-dom';

const App = () => {

  // TODO: reset game on location change to fix the bug with infinite wins
  // TODO: error page
  // TODO: place confetti in a relative container (disable on location change?)
  // TODO: try useLayoutEffect in tooltip 
  // TODO: create alerts system when I have some free time (and use it in Richard component)

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
