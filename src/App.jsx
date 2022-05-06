import Container from './components/Container';
import AboutMePage from './pages/AboutMePage';
import SidebarPage from './pages/SidebarPage';
import { addBackToTop } from 'vanilla-back-to-top';

export const App = () => {
  addBackToTop({
    diameter: 40,
    backgroundColor: '#',
    textColor: '#aa73d6',
  });
  return (
    <>
      <Container>
        <SidebarPage />
        <AboutMePage />
      </Container>
    </>
  );
};
