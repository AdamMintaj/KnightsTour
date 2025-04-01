import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { Outlet } from 'react-router-dom';
import useUpdateStats from 'hooks/useUpdateStats';
import { Analytics } from "@vercel/analytics/react"

// TODO: create alerts system (and use it in Richard component)

const disableAnalytics = localStorage.getItem('disableAnalytics') === 'true';

const App = () => {
  useUpdateStats();

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      {!disableAnalytics && <Analytics />}
    </>
  );
}

export default App;
