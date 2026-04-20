import { CheckCircle, MapPin, Users, Award, Factory } from 'lucide-react';

type Page = 'home' | 'about' | 'products' | 'projects' | 'contact';

interface AboutProps {
  onNavigate: (page: Page) => void;
}

const VICTORY = [
  {
    letter: 'V',
    word: 'Vision',
    description:
      'We look beyond the immediate project — anticipating future needs and engineering solutions that remain relevant and reliable for decades.',
  },
  {
    letter: 'I',
    word: 'Innovation',
    description:
      'Pioneering double-skin AHUs and extruded aluminium grills in North India, we continuously invest in better designs and manufacturing methods.',
  },
  {
    letter: 'C',
    word: 'Commitment',
    description:
      'Every order, regardless of size, receives the same rigorous engineering attention. On-time delivery is a commitment, not a target.',
  },
  {
    letter: 'T',
    word: 'Trust',
    description:
      'Built over 30 years of consistent quality and transparent dealings with clients, contractors, and partners across India.',
  },
  {
    letter: 'O',
    word: 'Operations Excellence',
    description:
      'Our 700 sq mtr Bahadurgarh manufacturing facility is organised for lean, efficient production — minimising waste and maximising quality.',
  },
  {
    letter: 'R',
    word: 'Reliability',
    description:
      'MEI equipment is designed for low-maintenance, long service life. Our clients trust us because our products simply work — year after year.',
  },
  {
    letter: 'Y',
    word: 'Your Success',
    description:
      'The final measure of our work is project success. We partner with contractors and consultants to ensure every installation meets its performance targets.',
  },
];

const MILESTONES = [
  { year: '2006', event: 'MEI incorporated in New Delhi' },
  { year: '2008', event: 'Launched double-skin AHU range — a first in North India' },
  { year: '2011', event: 'Commissioned Bahadurgarh manufacturing works' },
  { year: '2014', event: 'Introduced extruded aluminium grill product line' },
  { year: '2017', event: 'Expanded to clean room and acoustic product segments' },
  { year: '2020', event: 'Achieved 30+ major client milestone' },
  { year: '2024', event: 'Pan-India delivery with 6 full product categories' },
];

const INFRA = [
  { label: 'Factory Area', value: '700 sq mtr', icon: Factory },
  { label: 'Location', value: 'Bahadurgarh, Haryana', icon: MapPin },
  { label: 'Team', value: 'Experienced craftsmen & engineers', icon: Users },
  { label: 'Certifications', value: 'ISO-compliant processes', icon: Award },
];

export default function About({ onNavigate }: AboutProps) {
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
          <p className="text-teal-brand font-semibold text-sm uppercase tracking-widest mb-3">
            Who We Are
          </p>
          <h1 className="text-5xl font-extrabold text-white mb-4">About MEI</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Three decades of engineering expertise — delivered through innovation,
            commitment, and a relentless focus on quality.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-teal-brand font-semibold text-sm uppercase tracking-widest mb-3">
                Our Story
              </p>
              <h2 className="text-4xl font-bold text-navy-brand mb-6">
                Built on Expertise, Driven by Purpose
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Modern Engineering Industries was incorporated in 2006, but the expertise
                  behind the company spans over three decades. Founded by Mr. K.K. Mehta and
                  Mr. R.C. Mehta — both veterans of the HVAC industry — MEI was built on a
                  simple conviction: that Indian industry deserves high-quality, locally
                  manufactured HVAC equipment engineered to international standards.
                </p>
                <p>
                  Headquartered in New Delhi's industrial hub at 135 Pratap Nagar, MEI
                  operates a modern 700 sq mtr manufacturing facility at Bahadurgarh,
                  Haryana, where every product is designed, fabricated, and tested before
                  delivery.
                </p>
                <p>
                  We are proud to be the pioneer of double-skin Air Conditioning Units
                  (ACUs) and extruded aluminium grills in North India — products that have
                  since become the industry standard. Our six product categories serve
                  clients across hospitals, pharmaceuticals, hospitality, infrastructure,
                  and power generation.
                </p>
              </div>
            </div>

            {/* Timeline */}
            <div>
              <h3 className="text-xl font-bold text-navy-brand mb-6">Our Journey</h3>
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200" />
                <div className="space-y-6">
                  {MILESTONES.map(({ year, event }) => (
                    <div key={year} className="flex gap-6 pl-12 relative">
                      <div className="absolute left-0 w-8 h-8 bg-teal-brand rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 z-10">
                        <CheckCircle className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-teal-brand font-bold text-sm">{year}</div>
                        <div className="text-gray-700 text-sm mt-0.5">{event}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VICTORY Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-teal-brand font-semibold text-sm uppercase tracking-widest mb-3">
              Our Core Values
            </p>
            <h2 className="text-4xl font-bold text-navy-brand mb-4">
              The VICTORY Motto
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Seven principles that guide every decision, every design, and every
              delivery at Modern Engineering Industries.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {VICTORY.map(({ letter, word, description }, idx) => (
              <div
                key={letter}
                className={`bg-white rounded-xl p-7 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 ${
                  idx === 6 ? 'sm:col-span-2 lg:col-span-1 xl:col-span-1' : ''
                }`}
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl font-extrabold text-white mb-5 flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #00A0B0, #007f8c)' }}
                >
                  {letter}
                </div>
                <h3 className="text-lg font-bold text-navy-brand mb-2">{word}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-teal-brand font-semibold text-sm uppercase tracking-widest mb-3">
                Manufacturing Capability
              </p>
              <h2 className="text-4xl font-bold text-navy-brand mb-6">
                Our Infrastructure
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                MEI's manufacturing hub at Plot 1716, MIE Part B, Bahadurgarh, Haryana,
                spans 700 square metres of purpose-built factory space. The facility houses
                sheet metal fabrication, coil assembly, painting, and quality testing
                under one roof.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our integrated manufacturing model — from raw material to finished
                product — ensures complete quality control at every stage, shorter lead
                times, and the flexibility to accommodate custom specifications that most
                manufacturers cannot.
              </p>
              <ul className="space-y-3">
                {[
                  'Sheet metal fabrication & forming',
                  'CNC-controlled grill extrusion',
                  'Coil assembly & leak testing',
                  'Painting — powder coat and liquid finish',
                  'In-house acoustic material processing',
                  'Factory performance testing & commissioning',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-teal-brand flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {INFRA.map(({ label, value, icon: Icon }) => (
                <div
                  key={label}
                  className="bg-gray-50 border border-gray-100 rounded-xl p-6 hover:border-teal-brand hover:shadow-md transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-teal-brand/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-teal-brand" />
                  </div>
                  <div className="text-sm font-semibold text-gray-500 mb-1">{label}</div>
                  <div className="text-base font-bold text-navy-brand">{value}</div>
                </div>
              ))}

              <div className="col-span-2 bg-navy-brand rounded-xl p-6 text-white">
                <div className="text-sm text-gray-300 mb-1">Works Address</div>
                <div className="font-semibold mb-0.5">Plot 1716, MIE Part B</div>
                <div className="text-gray-300 text-sm">Bahadurgarh, Haryana — 124 507</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-teal-brand font-semibold text-sm uppercase tracking-widest mb-3">
              Leadership
            </p>
            <h2 className="text-4xl font-bold text-navy-brand mb-4">
              The Founders
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              MEI is led by two industry veterans whose combined experience spans
              the full breadth of HVAC engineering in India.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {[
              {
                name: 'Mr. K.K. Mehta',
                role: 'Partner & Technical Director',
                bio: 'With over 30 years in HVAC engineering, Mr. K.K. Mehta is the technical backbone of MEI. He oversees product design, manufacturing standards, and quality systems, and is the driving force behind MEI\'s innovation in double-skin AHU technology.',
              },
              {
                name: 'Mr. R.C. Mehta',
                role: 'Partner & Operations Director',
                bio: 'Mr. R.C. Mehta brings decades of operational and commercial expertise to MEI. He manages client relationships, project execution, and the Bahadurgarh manufacturing facility, ensuring every order is delivered to specification and on schedule.',
              },
            ].map(({ name, role, bio }) => (
              <div
                key={name}
                className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="w-16 h-16 bg-navy-brand rounded-full flex items-center justify-center text-white text-xl font-bold mb-5">
                  {name.split(' ')[1][0]}
                  {name.split(' ')[2][0]}
                </div>
                <h3 className="text-xl font-bold text-navy-brand mb-1">{name}</h3>
                <p className="text-teal-brand font-semibold text-sm mb-4">{role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 relative"
        style={{ background: 'linear-gradient(135deg, #1a3c5e 0%, #112840 100%)' }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Want to know more about our capabilities?
          </h2>
          <p className="text-gray-300 mb-8">
            Talk to our engineering team about your project requirements.
          </p>
          <button
            onClick={() => {
              onNavigate('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="bg-teal-brand hover:bg-teal-dark text-white font-semibold px-8 py-4 rounded transition-all duration-200"
          >
            Contact Our Team
          </button>
        </div>
      </section>
    </div>
  );
}
