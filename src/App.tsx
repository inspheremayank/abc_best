import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

type Page = 'home' | 'about' | 'products' | 'projects' | 'contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  useEffect(() => {
    AOS.init({ duration: 700, easing: 'ease-out-cubic', once: true, offset: 80 });
  }, []);

  useEffect(() => {
    AOS.refreshHard();
  }, [currentPage]);

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      <main className="flex-1">
        {currentPage === 'home' && <Home onNavigate={handleNavigate} />}
        {currentPage === 'about' && <About onNavigate={handleNavigate} />}
        {currentPage === 'products' && <Products onNavigate={handleNavigate} />}
        {/* {currentPage === 'projects' && <Projects onNavigate={handleNavigate} />} */}
        {currentPage === 'contact' && <Contact />}
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
