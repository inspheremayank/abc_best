import {
  CheckCircle, MapPin, Users, Zap, Wind, Layers,
  Settings2, Building2, BarChart2, Cpu, Award,
  Factory, ArrowRight, Volume2, Shield, Activity,
  LayoutTemplate,
} from 'lucide-react';

type Page = 'home' | 'about' | 'products' | 'projects' | 'contact';

interface AboutProps {
  onNavigate: (page: Page) => void;
}

const STATS = [
  { value: '30+', label: 'Years Combined Experience', icon: Award },
  { value: '1',   label: 'Offices — Haryana',    icon: Building2 },
  { value: '14',  label: 'Products in Portfolio',     icon: Layers },
  { value: '5',   label: 'Engineering Services',      icon: Settings2 },
];

const EXPERTISE_PILLARS = [
  {
    icon: Wind,
    title: 'HVAC Systems',
    points: [
      'Design, installation & maintenance',
      'Residential, commercial & industrial',
      'Energy Saving Solutions',
    ],
  },
  {
    icon: Zap,
    title: 'Indoor Environment Quality',
    points: [
      'Indoor Air Quality (IAQ) improvement',
      'Reduce pollutant concentration',
      'Achieve energy conservation',
    ],
  },
  {
    icon: Volume2,
    title: 'Acoustic Engineering',
    points: [
      'Architectural Acoustics',
      'Acoustic Louvers & Doors',
      'Silencers & insulated doors',
    ],
  },
];

const PRODUCTS = [
  { name: 'Air Handling Units',          icon: Wind },
  { name: 'Floor Mounted Vertical Units', icon: Activity },
  { name: 'Ceiling Suspending Units',    icon: Layers },
  { name: 'Air Washer Units',            icon: Zap },
  { name: 'Unitary Filtration Units',    icon: Shield },
  { name: 'Acoustic Louvers and Doors',  icon: Volume2 },
  { name: 'Extruded Aluminium Grills',   icon: Factory },
  { name: 'Diffusers',                   icon: Wind },
  { name: 'Dampers',                     icon: Settings2 },
  { name: 'DX Coils',                    icon: Activity },
  { name: 'Cooling Coil Units',          icon: Activity },
  { name: 'Tube Axial Fans',             icon: Wind },
  { name: 'Silencers',                   icon: Volume2 },
  { name: 'Acoustic / Insulated Doors',  icon: Shield },
];

const SERVICES = [
  { icon: Settings2,      title: '2D / 3D Drawings' },
  { icon: Volume2,        title: 'Architectural Acoustics' },
  { icon: LayoutTemplate, title: '3D Architectural Interiors' },
  { icon: BarChart2,      title: '3D Mechanical Services' },
  { icon: Cpu,            title: 'Computational Fluid Dynamics (CFD)' },
];

export default function About({ onNavigate }: AboutProps) {
  return (
    <div>
      {/* ── Page Header ──────────────────────────────────────────────────── */}
      <section
        className="pt-32 pb-20 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #112840 0%, #1a3c5e 50%, #0d2035 100%)' }}
      >
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              'linear-gradient(#00A0B0 1px, transparent 1px), linear-gradient(90deg, #00A0B0 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div
          className="absolute -right-32 -top-32 w-96 h-96 rounded-full opacity-10 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #00A0B0 0%, transparent 70%)' }}
        />
        <div
          className="absolute -left-16 bottom-0 w-64 h-64 rounded-full opacity-5 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #00A0B0 0%, transparent 70%)' }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p data-aos="fade-up" className="text-teal-brand font-semibold text-sm uppercase tracking-widest mb-3">
            Who We Are
          </p>
          <h1
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight"
          >
            About Besttech<br />
            <span style={{ color: '#00A0B0' }}>Engineering Solutions</span>
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-gray-300 text-lg max-w-2xl leading-relaxed"
          >
            A team of seasoned engineering professionals with over 30 years of combined experience
            in Manufacturing, Marketing, Sales and Execution across the HVAC industry.
          </p>

          <div data-aos="fade-up" data-aos-delay="300" className="flex gap-4 mt-8 flex-wrap">
            {['Delhi — Headquarters', 'Pune — Branch Office'].map((loc) => (
              <div
                key={loc}
                className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-sm text-gray-200"
              >
                <MapPin className="w-3.5 h-3.5 text-teal-brand flex-shrink-0" />
                {loc}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats Bar ────────────────────────────────────────────────────── */}
      <section style={{ background: 'linear-gradient(90deg, #00A0B0 0%, #007f8c 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/20">
            {STATS.map(({ value, label, icon: Icon }, idx) => (
              <div
                key={label}
                data-aos="fade-up"
                data-aos-delay={`${idx * 75}`}
                className="px-8 py-8 text-center text-white"
              >
                <Icon className="w-6 h-6 mx-auto mb-3 opacity-80" />
                <div className="text-4xl font-extrabold mb-1">{value}</div>
                <div className="text-sm text-white/80 font-medium">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Company Overview ─────────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Story text */}
            <div data-aos="fade-right">
              <p className="text-teal-brand font-semibold text-sm uppercase tracking-widest mb-3">
                Our Story
              </p>
              <h2 className="text-4xl font-bold text-navy-brand mb-6 leading-snug">
                30 Years of HVAC<br />Engineering Excellence
              </h2>
              <div className="space-y-5 text-gray-600 leading-relaxed">
                <p>
                  Besttech Engineering Solutions is a team of seasoned engineering professionals
                  with over <strong className="text-navy-brand">30 years of combined experience</strong> in
                  Manufacturing, Marketing, Sales and Execution across the HVAC (Heating, Ventilation
                  and Air Conditioning) industry. Headquartered in Delhi with a branch office in Pune,
                  we provide comprehensive Energy Saving Solutions for HVAC, Indoor Environment
                  Quality and Acoustic Engineering.
                </p>
                <p>
                  We specialize in design, installation and maintenance of HVAC systems for
                  residential, commercial and industrial projects. Our products are all manufactured
                  using the latest techniques for enhanced aesthetics and workability.
                </p>
              </div>
            </div>

            {/* Expertise pillars */}
            <div className="space-y-4 lg:pt-16">
              {EXPERTISE_PILLARS.map(({ icon: Icon, title, points }, idx) => (
                <div
                  key={title}
                  data-aos="fade-left"
                  data-aos-delay={`${idx * 100}`}
                  className="flex gap-5 p-6 bg-gray-50 border border-gray-100 rounded-xl hover:border-teal-brand hover:shadow-md transition-all duration-300 group"
                >
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:-translate-y-0.5 transition-transform duration-300"
                    style={{ background: 'linear-gradient(135deg, #00A0B0, #007f8c)' }}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy-brand mb-2">{title}</h3>
                    <ul className="space-y-1">
                      {points.map((pt) => (
                        <li key={pt} className="flex items-center gap-2 text-sm text-gray-500">
                          <span className="w-1.5 h-1.5 rounded-full bg-teal-brand flex-shrink-0" />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Product Portfolio ────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-aos="fade-up" className="text-center mb-14">
            <p className="text-teal-brand font-semibold text-sm uppercase tracking-widest mb-3">
              What We Build
            </p>
            <h2 className="text-4xl font-bold text-navy-brand mb-4">
              Our Product Portfolio
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              All manufactured using the latest techniques for enhanced aesthetics and
              workability — engineered for performance, designed for ease of installation.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {PRODUCTS.map(({ name, icon: Icon }, idx) => (
              <div
                key={name}
                data-aos="fade-up"
                data-aos-delay={`${(idx % 4) * 75}`}
                className="bg-white border border-gray-100 rounded-xl p-5 flex items-center gap-4 hover:border-teal-brand hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300"
                  style={{ background: 'linear-gradient(135deg, #00A0B0, #007f8c)' }}
                >
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <span className="text-sm font-semibold text-navy-brand leading-snug">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Engineering Services ─────────────────────────────────────────── */}
      <section
        className="py-24 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #112840 0%, #1a3c5e 100%)' }}
      >
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              'linear-gradient(#00A0B0 1px, transparent 1px), linear-gradient(90deg, #00A0B0 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-aos="fade-up" className="text-center mb-14">
            <p className="text-teal-brand font-semibold text-sm uppercase tracking-widest mb-3">
              Specialist Capabilities
            </p>
            <h2 className="text-4xl font-bold text-white mb-4">Engineering Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We also offer specialized engineering services for all engineering design
              requirements in the HVAC domain.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {SERVICES.map(({ icon: Icon, title }, idx) => (
              <div
                key={title}
                data-aos="fade-up"
                data-aos-delay={`${(idx % 3) * 100}`}
                className="bg-white/5 border border-white/10 rounded-xl p-7 hover:bg-white/10 hover:border-teal-brand hover:-translate-y-1 transition-all duration-300 group flex items-center gap-5"
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300"
                  style={{ background: 'linear-gradient(135deg, #00A0B0, #007f8c)' }}
                >
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-base font-bold text-white leading-snug">{title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team Strength ────────────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div data-aos="fade-right">
              <p className="text-teal-brand font-semibold text-sm uppercase tracking-widest mb-3">
                Our People
              </p>
              <h2 className="text-4xl font-bold text-navy-brand mb-6 leading-snug">
                A Multi-Disciplined<br />In-House Team
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Our strength lies in a multi-disciplined in-house team of engineers, draftsmen,
                supervisors and technicians. Our manufacturing expertise, combined with on-site
                project execution capabilities, enables us to deliver products that are easier to
                handle and quicker to install — helping improve Indoor Air Quality (IAQ), reduce
                pollutant concentration and achieve energy conservation for our clients.
              </p>
              <button
                onClick={() => {
                  onNavigate('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="mt-6 inline-flex items-center gap-2 bg-teal-brand hover:bg-teal-dark text-white font-semibold px-6 py-3 rounded transition-all duration-200 group"
              >
                Work With Us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>

            <div data-aos="fade-left" className="grid grid-cols-2 gap-5">
              {[
                { role: 'Engineers',    icon: Cpu },
                { role: 'Draftsmen',   icon: Settings2 },
                { role: 'Supervisors', icon: Users },
                { role: 'Technicians', icon: Factory },
              ].map(({ role, icon: Icon }, idx) => (
                <div
                  key={role}
                  data-aos="fade-up"
                  data-aos-delay={`${idx * 100}`}
                  className="bg-gray-50 border border-gray-100 rounded-xl p-6 hover:border-teal-brand hover:shadow-md transition-all duration-300 text-center"
                >
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto"
                    style={{ background: 'linear-gradient(135deg, #00A0B0, #007f8c)' }}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-navy-brand">{role}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section
        className="py-20 relative"
        style={{ background: 'linear-gradient(135deg, #1a3c5e 0%, #112840 100%)' }}
      >
        <div data-aos="fade-up" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-teal-brand font-semibold text-sm uppercase tracking-widest mb-4">
            Let's Build Together
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to discuss your HVAC project?
          </h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Talk to our engineering team about your requirements — from a single product
            to a complete system design and installation.
          </p>
          <button
            onClick={() => {
              onNavigate('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 bg-teal-brand hover:bg-teal-dark text-white font-semibold px-8 py-4 rounded transition-all duration-200 group"
          >
            Contact Our Team
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
      </section>
    </div>
  );
}
