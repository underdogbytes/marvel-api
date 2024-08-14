import { Navbar } from './components/Navbar';
import { useRouter } from './hooks/router';
import { ErrorPage } from './pages/Error';
import { HeroesPage } from './pages/Heroes';
import { HeroPage } from './pages/HeroPage';
import { Routes } from './routes/heroes';

function App() {
  const { route } = useRouter();

  const renderRoute = () => {
    if (route.startsWith(`/${Routes.HERO}/`)) {
      const heroId = route.split('/')[2];
      return <HeroPage heroId={heroId} />;
    }

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
