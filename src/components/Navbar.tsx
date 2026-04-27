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
    <svg width="160" height="60" viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg">
      <path d="M52,230 C80,170 130,155 175,170 C215,183 240,160 258,135" fill="none" stroke="#ffffff" strokeWidth="10" strokeLinecap="round"/>
      <path d="M52,252 C80,192 130,177 175,192 C215,205 240,182 258,157" fill="none" stroke="#4A52C8" strokeWidth="10" strokeLinecap="round"/>
      <path d="M52,274 C80,214 130,199 175,214 C215,227 240,204 258,179" fill="none" stroke="#ffffff" strokeWidth="10" strokeLinecap="round"/>
      <path d="M38,308 C60,200 130,95 268,108" fill="none" stroke="#ffffff" strokeWidth="10" strokeLinecap="round"/>
      <text x="295" y="218" fontFamily="Arial Black, sans-serif" fontWeight="900" fontSize="78px" fill="#ffffff">BESTTECH</text>
      <line x1="296" y1="232" x2="648" y2="232" stroke="#ffffff" strokeWidth="1.5"/>
      <text x="298" y="256" fontFamily="Arial, sans-serif" fontWeight="600" fontSize="15.5px" fill="#ffffff" letterSpacing="4">ENGINEERING SOLUTION LLP</text>
      <text x="299" y="280" fontFamily="Arial, sans-serif" fontSize="12.5px" fill="#4A52C8" letterSpacing="0.8" fontStyle="italic">Building Innovation, Engineering Excellence</text>
    </svg>
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
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => handleNav('home')}
            className="flex items-center group"
          >
            <BrandLogo />
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ label, page }) => (
              <button
                key={page}
                onClick={() => handleNav(page)}
                className={`px-4 py-2 rounded text-sm font-medium transition-all duration-200 ${
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
