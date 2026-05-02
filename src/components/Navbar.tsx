import { useState, useEffect } from 'react';
import { Menu, X, Wind } from 'lucide-react';

type Page = 'home' | 'about' | 'products' | 'projects' | 'contact';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const NAV_LINKS: { label: string; page: Page }[] = [
  { label: 'Home', page: 'home' },
  { label: 'About', page: 'about' },
  { label: 'Products', page: 'products' },
  { label: 'Contact', page: 'contact' },
];

function BrandLogo() {
  return (
    <img src="/images/logo.png" alt="Logo" className="w-80 h-auto" />
  );
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (page: Page) => {
    onNavigate(page);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? 'bg-navy-brand shadow-lg'
          : 'bg-navy-brand/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <button
            onClick={() => handleNav('home')}
            className="flex items-center group mt-2"
          >
            <BrandLogo />
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ label, page }) => (
              <button
                key={page}
                onClick={() => handleNav(page)}
                className={`px-4 py-2 rounded text-md font-medium transition-all duration-200 ${
                  currentPage === page
                    ? 'text-teal-brand border-b-2 border-teal-brand'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {label}
              </button>
            ))}
            {/* <button
              onClick={() => handleNav('contact')}
              className="ml-3 bg-teal-brand hover:bg-teal-dark text-white text-sm font-semibold px-5 py-2 rounded transition-colors duration-200"
            >
              Get Quote
            </button> */}
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white p-2 rounded hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-navy-dark border-t border-white/10">
          <div className="px-4 py-3 space-y-1">
            {NAV_LINKS.map(({ label, page }) => (
              <button
                key={page}
                onClick={() => handleNav(page)}
                className={`block w-full text-left px-4 py-3 rounded text-sm font-medium transition-colors ${
                  currentPage === page
                    ? 'bg-teal-brand text-white'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {label}
              </button>
            ))}
            {/* <button
              onClick={() => handleNav('contact')}
              className="block w-full text-center mt-2 bg-teal-brand hover:bg-teal-dark text-white text-sm font-semibold px-5 py-3 rounded transition-colors"
            >
              Get Quote
            </button> */}
          </div>
        </div>
      )}
    </header>
  );
}
