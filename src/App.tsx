import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { Outlet } from 'react-router-dom';
import useUpdateStats from 'hooks/useUpdateStats';

// TODO: create alerts system (and use it in Richard component)

const App = () => {
  useUpdateStats();

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
