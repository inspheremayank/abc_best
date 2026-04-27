import { useState } from 'react';
import { MapPin, Phone, Mail, Globe, Clock, CheckCircle, Send } from 'lucide-react';

const PRODUCT_INTERESTS = [
  'AC Equipment (AHU / FCU)',
  'Ventilation Equipment',
  'Air Distribution (Grills / Dampers)',
  'Clean Room Equipment',
  'Acoustic Products',
  'General Fabrication',
  'Multiple / Not Sure',
];

interface FormState {
  name: string;
  company: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
}

const EMPTY_FORM: FormState = {
  name: '',
  company: '',
  email: '',
  phone: '',
  interest: '',
  message: '',
};

export default function Contact() {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate a short delay for UX
    await new Promise((r) => setTimeout(r, 800));
    setSubmitting(false);
    setSubmitted(true);
  };

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
            Get In Touch
          </p>
          <h1 data-aos="fade-up" data-aos-delay="100" className="text-5xl font-extrabold text-white mb-4">Contact Us</h1>
          <p data-aos="fade-up" data-aos-delay="200" className="text-gray-300 text-lg max-w-2xl">
            Send us your requirements and our team will respond within one business day.
          </p>
        </div>
      </section>

      {/* Quick Contact Bar */}
      <section className="bg-teal-brand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-wrap gap-6 justify-center sm:justify-between items-center text-white">
            <a
              href="tel:+919996906359"
              className="flex items-center gap-2.5 hover:text-white/80 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span className="font-semibold">+91 99969 06359</span>
            </a>
            <a
              href="mailto:meind2006@gmail.com"
              className="flex items-center gap-2.5 hover:text-white/80 transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span className="font-semibold">meind2006@gmail.com</span>
            </a>
            <div className="flex items-center gap-2.5 text-white/90">
              <Clock className="w-5 h-5" />
              <span>Mon – Sat, 9:00 AM – 6:00 PM IST</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Enquiry Form */}
            <div data-aos="fade-right" className="lg:col-span-3">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                <h2 className="text-2xl font-bold text-navy-brand mb-2">Send an Enquiry</h2>
                <p className="text-gray-500 text-sm mb-8">
                  Fill in your details and we'll get back to you with product information,
                  pricing, or technical specifications.
                </p>

                {submitted ? (
                  <div className="py-12 text-center">
                    <div className="w-16 h-16 bg-teal-brand/10 rounded-full flex items-center justify-center mx-auto mb-5">
                      <CheckCircle className="w-8 h-8 text-teal-brand" />
                    </div>
                    <h3 className="text-xl font-bold text-navy-brand mb-2">
                      Enquiry Received
                    </h3>
                    <p className="text-gray-500 mb-6 max-w-sm mx-auto text-sm">
                      Thank you, {form.name || 'there'}! Our team will review your enquiry
                      and respond within one business day.
                    </p>
                    <button
                      onClick={() => {
                        setForm(EMPTY_FORM);
                        setSubmitted(false);
                      }}
                      className="text-teal-brand font-semibold text-sm hover:underline"
                    >
                      Submit another enquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Mr. / Ms. Your Name"
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-brand focus:border-transparent transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                          Company / Organisation
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={form.company}
                          onChange={handleChange}
                          placeholder="Your company name"
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-brand focus:border-transparent transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder="you@company.com"
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-brand focus:border-transparent transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+91 XXXXX XXXXX"
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-brand focus:border-transparent transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Product Interest
                      </label>
                      <select
                        name="interest"
                        value={form.interest}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-brand focus:border-transparent transition-all bg-white text-gray-700"
                      >
                        <option value="">Select a product category...</option>
                        {PRODUCT_INTERESTS.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Message / Requirements <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Please describe your project, quantities, specifications, or any other details that will help us respond accurately..."
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-brand focus:border-transparent transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full flex items-center justify-center gap-2 bg-teal-brand hover:bg-teal-dark disabled:opacity-60 text-white font-semibold py-3.5 rounded-lg transition-all duration-200"
                    >
                      {submitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Enquiry
                        </>
                      )}
                    </button>

                    <p className="text-xs text-gray-400 text-center">
                      We respect your privacy. Your details are used solely to respond to
                      your enquiry.
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Info */}
            <div data-aos="fade-left" className="lg:col-span-2 space-y-6">
              {/* Office Card */}
              {/* <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-7">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-teal-brand rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Head Office</div>
                    <div className="font-bold text-navy-brand text-sm">New Delhi</div>
                  </div>
                </div>
                <address className="not-italic text-sm text-gray-600 leading-relaxed">
                  135 Pratap Nagar
                  <br />
                  New Delhi – 110 007
                  <br />
                  India
                </address>
              </div> */}

              {/* Works Card */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-7">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-navy-brand rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Head Office</div>
                    <div className="font-bold text-navy-brand text-sm">BESTTECH ENGINEERING SOLUTION LLP</div>
                  </div>
                </div>
                <address className="not-italic text-sm text-gray-600 leading-relaxed">
                  PLOT NO. 104, M.I.E PART-A, BAHADURGARH,
                  <br />
                  DISTT. JHAJJAR (HARYANA) 124507
                  <br />
                  India
                  <br />
                  LLP ID NO. - AGW - 8386
                  <br/>
                  GSTIN: 06ABGFB6968H1Z4
                </address>
              </div>

              {/* Contact Details */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-7 space-y-4">
                <h3 className="font-bold text-navy-brand text-sm mb-4">Direct Contact</h3>
                <a
                  href="tel:+919996906359"
                  className="flex items-center gap-3 text-sm text-gray-600 hover:text-teal-brand transition-colors group"
                >
                  <div className="w-9 h-9 bg-teal-brand/10 group-hover:bg-teal-brand rounded-lg flex items-center justify-center transition-colors flex-shrink-0">
                    <Phone className="w-4 h-4 text-teal-brand group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-medium">Call Us</div>
                    <div className="font-semibold">+91 99969 06359</div>
                  </div>
                </a>
                <a
                  href="mailto:meind2006@gmail.com"
                  className="flex items-center gap-3 text-sm text-gray-600 hover:text-teal-brand transition-colors group"
                >
                  <div className="w-9 h-9 bg-teal-brand/10 group-hover:bg-teal-brand rounded-lg flex items-center justify-center transition-colors flex-shrink-0">
                    <Mail className="w-4 h-4 text-teal-brand group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-medium">Email Us</div>
                    <div className="font-semibold">meind2006@gmail.com</div>
                  </div>
                </a>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <div className="w-9 h-9 bg-teal-brand/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Globe className="w-4 h-4 text-teal-brand" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-medium">Website</div>
                    <div className="font-semibold text-gray-700">modernengineeringindustries.com</div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-navy-brand rounded-xl p-6 text-white">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-4 h-4 text-teal-brand" />
                  <span className="font-semibold text-sm">Business Hours</span>
                </div>
                <div className="space-y-2 text-sm text-gray-300">
                  <div className="flex justify-between">
                    <span>Monday – Friday</span>
                    <span className="font-semibold text-white">9:00 AM – 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-semibold text-white">9:00 AM – 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-gray-400">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
