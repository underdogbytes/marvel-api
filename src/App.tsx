import { Navbar } from './components/Navbar';
import { useRouter } from './hooks/router';
import { ErrorPage } from './pages/Error';
import { HeroesPage } from './pages/Heroes';
import { Routes } from './routes/heroes';

function App() {
  const { route } = useRouter();

  const renderRoute = () => {
    switch (route) {
      case Routes.HOME:
        return <HeroesPage />;
      default:
        return <ErrorPage />;
    }
  }
  return (
    <>
      <Navbar />

      <main>
        {renderRoute()}
      </main>
    </>
  );
}

export default App;
