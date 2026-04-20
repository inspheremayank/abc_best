import { Wind, Thermometer, Layers, ShieldCheck, Volume2, Wrench, ArrowRight, CheckCircle, Building2, Users, Award, Grid3x3 as Grid3X3 } from 'lucide-react';

type Page = 'home' | 'about' | 'products' | 'projects' | 'contact';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

const STATS = [
  { value: '30+', label: 'Years Experience', icon: Award },
  { value: 'Pan-India', label: 'Project Reach', icon: Building2 },
  { value: '30+', label: 'Major Clients', icon: Users },
  { value: '6', label: 'Product Categories', icon: Grid3X3 },
];

const PRODUCT_CATEGORIES = [
  {
    icon: Thermometer,
    title: 'AC Equipment',
    description: 'AHUs, FCUs, and Cooling Coils engineered for precision climate control in commercial and industrial facilities.',
  },
  {
    icon: Wind,
    title: 'Ventilation Equipment',
    description: 'Air Washers, Scrubbers, Axial Fans, and industrial ventilation solutions for process and building applications.',
  },
  {
    icon: Layers,
    title: 'Air Distribution',
    description: 'Complete range of Grills, Diffusers, Dampers, and Louvers in SS, AL, and MS for every HVAC system.',
  },
  {
    icon: ShieldCheck,
    title: 'Clean Room Equipment',
    description: 'LAF Units, HEPA Filter Housings, and guided airflow systems for pharmaceutical and hospital clean rooms.',
  },
  {
    icon: Volume2,
    title: 'Acoustic Products',
    description: 'Fan Silencers, Duct Silencers, Acoustic Doors, and enclosures for noise-sensitive industrial environments.',
  },
  {
    icon: Wrench,
    title: 'General Fabrication',
    description: 'High-temp bellows, dampers, kitchen exhaust ducts, MS base frames, and custom industrial fabrication.',
  },
];

const CLIENT_LOGOS = [
  'Voltas',
  'Maruti Suzuki',
  'Oberoi Hotels',
  'Radisson',
  'Johnson Medical',
  'American Embassy',
  'DMRC',
  'Ranbaxy',
];

const WHY_MEI = [
  'Double-skin AHU pioneer in North India',
  'Extruded aluminium grill specialist',
  'Pan-India project delivery capability',
  'In-house fabrication at Bahadurgarh works',
  '30+ years combined leadership experience',
  'Trusted by hospitals, pharma & infrastructure',
];

export default function Home({ onNavigate }: HomeProps) {
  const handleNavigate = (page: Page) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      {/* Hero */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #112840 0%, #1a3c5e 50%, #1e4f78 100%)' }}
      >
        {/* Decorative grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              'linear-gradient(#00A0B0 1px, transparent 1px), linear-gradient(90deg, #00A0B0 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        {/* Accent circle */}
        <div
          className="absolute -right-32 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #00A0B0, transparent 70%)' }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-teal-brand/20 border border-teal-brand/40 text-teal-brand text-xs font-semibold px-4 py-2 rounded-full mb-6 tracking-wider uppercase">
              <span className="w-2 h-2 bg-teal-brand rounded-full animate-pulse" />
              Manufacturer &amp; Exporter | Since 2006
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
              30+ Years of
              <br />
              <span style={{ color: '#00A0B0' }}>Engineering</span>
              <br />
              Excellence
            </h1>

            <p className="text-lg text-gray-300 leading-relaxed mb-10 max-w-2xl">
              Modern Engineering Industries is a leading manufacturer and exporter of HVAC
              equipment — Air Handling Units, Air Washers, Fan Coil Units, Grills, Clean
              Room Equipment, and more — trusted by India's most demanding clients.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => handleNavigate('products')}
                className="flex items-center gap-2 bg-teal-brand hover:bg-teal-dark text-white font-semibold px-8 py-4 rounded transition-all duration-200 text-base"
              >
                Explore Our Products
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => handleNavigate('contact')}
                className="flex items-center gap-2 border-2 border-white/40 hover:border-teal-brand text-white font-semibold px-8 py-4 rounded transition-all duration-200 text-base"
              >
                Request a Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-teal-brand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map(({ value, label, icon: Icon }) => (
              <div key={label} className="flex items-center gap-4 text-white">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-extrabold leading-none">{value}</div>
                  <div className="text-sm text-white/80 mt-0.5">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Brief */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-teal-brand font-semibold text-sm uppercase tracking-widest mb-3">
                About Modern Engineering Industries
              </p>
              <h2 className="text-4xl font-bold text-navy-brand mb-6 leading-tight">
                North India's Premier HVAC Manufacturer
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Established in 2006 and backed by 30+ years of combined industry experience,
                MEI is headquartered in New Delhi with a dedicated manufacturing works at
                Bahadurgarh, Haryana. We design, manufacture, and supply a comprehensive
                range of HVAC equipment to clients across India and abroad.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                As a pioneer of double-skin ACUs and extruded aluminium grills in North India,
                we combine advanced manufacturing capabilities with deep domain expertise to
                deliver equipment that performs reliably in the most demanding environments —
                from pharma clean rooms to metro tunnels.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {WHY_MEI.map((point) => (
                  <div key={point} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-teal-brand mt-0.5 flex-shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual card */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Works Area', value: '700 sq mtr', sub: 'Bahadurgarh facility' },
                { label: 'Sectors Served', value: '5+', sub: 'Industries covered' },
                { label: 'Products', value: '30+', sub: 'Unique product types' },
                { label: 'Cities Reached', value: 'Pan-India', sub: 'Delivery network' },
              ].map(({ label, value, sub }) => (
                <div
                  key={label}
                  className="bg-gray-50 border border-gray-100 rounded-xl p-6 hover:border-teal-brand hover:shadow-md transition-all duration-300"
                >
                  <div className="text-2xl font-extrabold text-navy-brand mb-1">{value}</div>
                  <div className="text-sm font-semibold text-gray-700 mb-0.5">{label}</div>
                  <div className="text-xs text-gray-500">{sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-teal-brand font-semibold text-sm uppercase tracking-widest mb-3">
              What We Manufacture
            </p>
            <h2 className="text-4xl font-bold text-navy-brand mb-4">
              Our Product Categories
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Six comprehensive product lines covering every aspect of HVAC engineering —
              from precision air conditioning to industrial acoustics.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCT_CATEGORIES.map(({ icon: Icon, title, description }) => (
              <button
                key={title}
                onClick={() => handleNavigate('products')}
                className="group bg-white rounded-xl p-7 border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-left"
              >
                <div className="w-12 h-12 rounded-lg bg-teal-brand/10 group-hover:bg-teal-brand flex items-center justify-center mb-5 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-teal-brand group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold text-navy-brand mb-2 group-hover:text-teal-brand transition-colors">
                  {title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
                <div className="mt-4 flex items-center gap-1 text-teal-brand text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  View Products <ArrowRight className="w-4 h-4" />
                </div>
              </button>
            ))}
          </div>

          <div className="text-center mt-10">
            <button
              onClick={() => handleNavigate('products')}
              className="bg-navy-brand hover:bg-navy-light text-white font-semibold px-8 py-4 rounded transition-all duration-200 inline-flex items-center gap-2"
            >
              View All Products
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-teal-brand font-semibold text-sm uppercase tracking-widest mb-3">
              Trusted By
            </p>
            <h2 className="text-4xl font-bold text-navy-brand mb-4">Our Major Clients</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              From automotive giants to five-star hospitality, government infrastructure to
              cutting-edge pharmaceuticals — our equipment performs where it matters most.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
            {CLIENT_LOGOS.map((client) => (
              <div
                key={client}
                className="bg-gray-50 border border-gray-100 rounded-xl px-4 py-6 flex items-center justify-center hover:border-teal-brand hover:bg-teal-brand/5 transition-all duration-300 group"
              >
                <span className="text-sm font-semibold text-gray-500 group-hover:text-navy-brand text-center transition-colors">
                  {client}
                </span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => handleNavigate('projects')}
              className="border-2 border-navy-brand text-navy-brand hover:bg-navy-brand hover:text-white font-semibold px-8 py-3 rounded transition-all duration-200 inline-flex items-center gap-2"
            >
              View Projects &amp; Clients
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1a3c5e 0%, #112840 100%)' }}
      >
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              'linear-gradient(#00A0B0 1px, transparent 1px), linear-gradient(90deg, #00A0B0 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to discuss your HVAC requirements?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Our engineers are ready to specify, design, and deliver the right HVAC solution
            for your project — on time and within budget.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => handleNavigate('contact')}
              className="bg-teal-brand hover:bg-teal-dark text-white font-semibold px-8 py-4 rounded transition-all duration-200 text-base"
            >
              Send an Enquiry
            </button>
            <a
              href="tel:+919810399171"
              className="border-2 border-white/30 hover:border-teal-brand text-white font-semibold px-8 py-4 rounded transition-all duration-200 text-base inline-flex items-center gap-2"
            >
              Call +91 98103 99171
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
