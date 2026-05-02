import { MapPin, Phone, Mail, Globe, Wind, MessageCircle } from 'lucide-react';

type Page = 'home' | 'about' | 'products' | 'contact';

interface FooterProps {
  onNavigate: (page: Page) => void;
}
function BrandLogo() {
  return (
    <svg width="160" height="60" viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg">
      <path d="M52,230 C80,170 130,155 175,170 C215,183 240,160 258,135" fill="none" stroke="#ffffff" strokeWidth="10" strokeLinecap="round" />
      <path d="M52,252 C80,192 130,177 175,192 C215,205 240,182 258,157" fill="none" stroke="#4A52C8" strokeWidth="10" strokeLinecap="round" />
      <path d="M52,274 C80,214 130,199 175,214 C215,227 240,204 258,179" fill="none" stroke="#ffffff" strokeWidth="10" strokeLinecap="round" />
      <path d="M38,308 C60,200 130,95 268,108" fill="none" stroke="#ffffff" strokeWidth="10" strokeLinecap="round" />
      <text x="295" y="218" fontFamily="Arial Black, sans-serif" fontWeight="900" fontSize="78px" fill="#ffffff">BESTTECH</text>
      <line x1="296" y1="232" x2="648" y2="232" stroke="#ffffff" strokeWidth="1.5" />
      <text x="298" y="256" fontFamily="Arial, sans-serif" fontWeight="600" fontSize="15.5px" fill="#ffffff" letterSpacing="4">ENGINEERING SOLUTION LLP</text>
      <text x="299" y="280" fontFamily="Arial, sans-serif" fontSize="12.5px" fill="#4A52C8" letterSpacing="0.8" fontStyle="italic">Building Innovation, Engineering Excellence</text>
    </svg>
  );
}

const phoneNumber = "919996906359"; // with country code
const message = `Hi! Welcome to Besttech Solutions!
We provide high-quality HVAC & Air Pollution Control products.
Tell us your requirement and we'll get back to you within minutes!`;

const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

export function WhatsAppButton() {
  return (
    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
      Chat on WhatsApp
    </a>
  );
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleNav = (page: Page) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-dark text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="mb-4">
            <BrandLogo />
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {(['home', 'about', 'products', 'contact'] as Page[]).map((page) => (
                <li key={page}>
                  <button
                    onClick={() => handleNav(page)}
                    className="text-gray-400 hover:text-teal-brand transition-colors capitalize"
                  >
                    {page.charAt(0).toUpperCase() + page.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Products
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {[
                'AC Equipment (AHU / FCU)',
                'Ventilation Equipment',
                'Air Distribution',
                'Clean Room Equipment',
                'Acoustic Products',
                'General Fabrication',
              ].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => handleNav('products')}
                    className="hover:text-teal-brand transition-colors text-left"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-teal-brand mt-0.5 flex-shrink-0" />
                <span>PLOT NO. 104, M.I.E PART-A, BAHADURGARH,
                  <br />
                  DISTT. JHAJJAR (HARYANA) 124507</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-teal-brand flex-shrink-0" />
                <a href="tel:+919996906359" className="hover:text-teal-brand transition-colors">
                  +91 99969 06359
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-teal-brand flex-shrink-0" />
                <a href="mailto:meind2006@gmail.com" className="hover:text-teal-brand transition-colors">
                  meind2006@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-teal-brand flex-shrink-0" />
                <span className="text-gray-400">modernengineeringindustries.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Besttech Engineering Solution LLP. All rights reserved.</p>
         
        </div>
      </div>

      <div style={{ position: "fixed", bottom: 20, right: 20 }}>
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"  className="fixed bottom-5 right-5 bg-green-500 text-white p-3 rounded-full shadow-lg">
          <MessageCircle size={24} />
        </a>
      </div>
    </footer>
  );
}
