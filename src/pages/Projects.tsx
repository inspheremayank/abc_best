import { useState } from 'react';
import { MapPin, Building2, ArrowRight } from 'lucide-react';
import { PROJECTS, SECTORS, type ProjectSector } from '../data/projects';

type Page = 'home' | 'about' | 'products' | 'projects' | 'contact';

interface ProjectsProps {
  onNavigate: (page: Page) => void;
}

const SECTOR_DESCRIPTIONS: Record<ProjectSector, string> = {
  Hospitals: 'AHUs, FCUs, LAF units, and clean room equipment supplied to leading hospitals and healthcare facilities across India.',
  Pharma: 'Precision HVAC systems for pharmaceutical manufacturing and sterile processing environments.',
  'Hotels & Malls': 'Complete HVAC solutions for five-star hotels, service apartments, and large commercial malls.',
  Industrial: 'Heavy-duty ventilation, acoustic systems, and process HVAC for industrial and infrastructure projects.',
  'Power Plants': 'High-temperature, high-reliability HVAC equipment for power generation and utility facilities.',
};

const NOTABLE_HIGHLIGHTS = [
  { project: 'Maruti Suzuki Manesar', detail: 'Paint Shop Ventilation & Air Washers', sector: 'Industrial' },
  { project: 'American Embassy Delhi', detail: 'AHU & Air Distribution Systems', sector: 'Industrial' },
  { project: 'DMRC Metro Rail', detail: 'Tunnel Ventilation Fans & Dampers', sector: 'Industrial' },
  { project: 'Formula 1 Race Circuit Noida', detail: 'HVAC & Acoustic Systems', sector: 'Industrial' },
  { project: 'Oberoi Hotels', detail: 'Guest Room FCU & Lobby AHU Overhaul', sector: 'Hotels & Malls' },
  { project: 'Radisson Hotels', detail: 'Full HVAC System Supply & Installation', sector: 'Hotels & Malls' },
  { project: 'Ranbaxy Laboratories', detail: 'Clean Room HVAC & Laminar Flow', sector: 'Pharma' },
  { project: 'Johnson Medical Singapore', detail: 'OT Complex HVAC Systems', sector: 'Hospitals' },
];

export default function Projects({ onNavigate }: ProjectsProps) {
  const [activeSector, setActiveSector] = useState<ProjectSector>('Hospitals');

  const sectorProjects = PROJECTS.filter((p) => p.sector === activeSector);

  return (
    <div>
      {/* Page Header */}
      <section
        className="pt-32 pb-16 relative"
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
          <p data-aos="fade-up" className="text-teal-brand font-semibold text-sm uppercase tracking-widest mb-3">
            Track Record
          </p>
          <h1 data-aos="fade-up" data-aos-delay="100" className="text-5xl font-extrabold text-white mb-4">Projects &amp; Clients</h1>
          <p data-aos="fade-up" data-aos-delay="200" className="text-gray-300 text-lg max-w-2xl">
            A trusted partner for India's most demanding HVAC projects — from critical care
            hospitals to metro tunnels and Formula 1 circuits.
          </p>
        </div>
      </section>

      {/* Notable Highlights */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-aos="fade-up" className="text-center mb-10">
            <p className="text-teal-brand font-semibold text-sm uppercase tracking-widest mb-3">
              Landmark Installations
            </p>
            <h2 className="text-3xl font-bold text-navy-brand">Notable Projects</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {NOTABLE_HIGHLIGHTS.map(({ project, detail, sector }, idx) => (
              <div
                key={project}
                data-aos="zoom-in"
                data-aos-delay={`${(idx % 4) * 75}`}
                className="group bg-gray-50 border border-gray-100 rounded-xl p-6 hover:border-teal-brand hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-9 h-9 bg-teal-brand/10 group-hover:bg-teal-brand rounded-lg flex items-center justify-center mb-4 transition-colors duration-300">
                  <Building2 className="w-4 h-4 text-teal-brand group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-bold text-navy-brand text-sm mb-1.5 group-hover:text-teal-brand transition-colors">
                  {project}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-2">{detail}</p>
                <span className="text-xs font-semibold text-teal-brand bg-teal-brand/10 px-2 py-0.5 rounded-full">
                  {sector}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sector Tabs */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-teal-brand font-semibold text-sm uppercase tracking-widest mb-3">
              Browse By Sector
            </p>
            <h2 className="text-3xl font-bold text-navy-brand mb-4">Projects By Industry</h2>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 overflow-x-auto pb-4 mb-8">
            {SECTORS.map((sector) => (
              <button
                key={sector}
                onClick={() => setActiveSector(sector)}
                className={`flex-shrink-0 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  activeSector === sector
                    ? 'bg-teal-brand text-white shadow-sm'
                    : 'bg-white border border-gray-200 text-gray-600 hover:border-teal-brand hover:text-teal-brand'
                }`}
              >
                {sector}
              </button>
            ))}
          </div>

          {/* Sector Description */}
          <div className="bg-white border border-gray-100 rounded-xl p-5 mb-8 flex items-start gap-4">
            <div className="w-10 h-10 bg-teal-brand rounded-lg flex items-center justify-center flex-shrink-0">
              <Building2 className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-navy-brand mb-1">{activeSector}</h3>
              <p className="text-sm text-gray-600">{SECTOR_DESCRIPTIONS[activeSector]}</p>
            </div>
          </div>

          {/* Project Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {sectorProjects.map(({ client, project, location }) => (
              <div
                key={client + project}
                className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 p-6"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="w-9 h-9 bg-navy-brand/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-4 h-4 text-navy-brand" />
                  </div>
                </div>
                <h3 className="font-bold text-navy-brand mb-1.5">{client}</h3>
                <p className="text-sm text-gray-600 mb-3 leading-relaxed">{project}</p>
                <div className="flex items-center gap-1.5 text-xs text-gray-400">
                  <MapPin className="w-3.5 h-3.5 text-teal-brand" />
                  {location}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos Strip */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-teal-brand font-semibold text-sm uppercase tracking-widest mb-3">
              Our Clients
            </p>
            <h2 className="text-3xl font-bold text-navy-brand">Trusted Across Industries</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              'Voltas', 'Maruti Suzuki', 'Oberoi Hotels', 'Radisson Hotels',
              'Johnson Medical', 'American Embassy', 'DMRC', 'Ranbaxy',
              'NTPC', 'BHEL', 'Tata Power', 'Apollo Hospital',
              'Max Healthcare', 'Fortis Hospitals', 'Sun Pharmaceuticals', 'Cipla',
            ].map((client, idx) => (
              <div
                key={client}
                data-aos="zoom-in"
                data-aos-delay={`${(idx % 4) * 75}`}
                className="bg-gray-50 border border-gray-100 rounded-xl px-4 py-5 flex items-center justify-center hover:border-teal-brand hover:bg-teal-brand/5 transition-all duration-300 group"
              >
                <span className="text-sm font-semibold text-gray-500 group-hover:text-navy-brand text-center transition-colors">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16"
        style={{ background: 'linear-gradient(135deg, #1a3c5e 0%, #112840 100%)' }}
      >
        <div data-aos="fade-up" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Join our growing list of satisfied clients
          </h2>
          <p className="text-gray-300 mb-8">
            Let's discuss your HVAC requirements and how MEI can deliver the right solution.
          </p>
          <button
            onClick={() => {
              onNavigate('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="bg-teal-brand hover:bg-teal-dark text-white font-semibold px-8 py-4 rounded transition-all duration-200 inline-flex items-center gap-2"
          >
            Start a Conversation
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
