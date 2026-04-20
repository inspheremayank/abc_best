import { MapPin, Phone, Mail, Globe, Wind } from 'lucide-react';

type Page = 'home' | 'about' | 'products' | 'projects' | 'contact';

interface FooterProps {
  onNavigate: (page: Page) => void;
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
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-teal-brand rounded flex items-center justify-center flex-shrink-0">
                <Wind className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-white font-bold text-sm">MEI</div>
                <div className="text-teal-brand text-[10px] tracking-wider uppercase">
                  Modern Engineering Industries
                </div>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-400 mb-4">
              Manufacturer & exporter of precision HVAC equipment since 2006. Trusted by
              leading hospitals, pharma companies, hotels, and infrastructure projects
              across India.
            </p>
            <div className="text-xs text-gray-500">ISO-compliant manufacturing | Pan-India delivery</div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {(['home', 'about', 'products', 'projects', 'contact'] as Page[]).map((page) => (
                <li key={page}>
                  <button
                    onClick={() => handleNav(page)}
                    className="text-gray-400 hover:text-teal-brand transition-colors capitalize"
                  >
                    {page === 'projects' ? 'Projects & Clients' : page.charAt(0).toUpperCase() + page.slice(1)}
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
                <span>135 Pratap Nagar, New Delhi – 110 007</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-teal-brand flex-shrink-0" />
                <a href="tel:+919810399171" className="hover:text-teal-brand transition-colors">
                  +91 98103 99171
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
          <p>© {new Date().getFullYear()} Modern Engineering Industries. All rights reserved.</p>
          <p>135 Pratap Nagar, New Delhi | GST & ISO Compliant</p>
        </div>
      </div>
    </footer>
  );
}
