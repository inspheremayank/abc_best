import { useState, useEffect } from 'react';
import {
  Thermometer,
  Wind,
  Layers,
  ShieldCheck,
  Volume2,
  Wrench,
  ArrowRight,
  ArrowLeft,
  X,
  CheckCircle2,
} from 'lucide-react';
import { PRODUCTS, type ProductCategory } from '../data/products';

const CATEGORIES: ProductCategory[] = [
  'AC Equipment',
  'Ventilation',
  'Air Distribution',
  'Clean Room',
  'Acoustic',
  'Fabrication',
];

type Page = 'home' | 'about' | 'products' | 'projects' | 'contact';
type ProductView = 'categories' | 'listing' | 'detail';

interface ProductsProps {
  onNavigate: (page: Page) => void;
}

// ─── Category meta ────────────────────────────────────────────────────────────

const CATEGORY_ICONS: Record<ProductCategory, React.ElementType> = {
  'AC Equipment': Thermometer,
  'Ventilation': Wind,
  'Air Distribution': Layers,
  'Clean Room': ShieldCheck,
  'Acoustic': Volume2,
  'Fabrication': Wrench,
};

// Placeholder thumbnail background colors — replace `bg` with a real image path
const CATEGORY_META: Record<
  ProductCategory,
  { bg: string; accent: string; tagBg: string; tagText: string; thumb?: string }
> = {
  'AC Equipment': { bg: '#dbeafe', accent: '#1e40af', tagBg: '#dbeafe', tagText: '#1e40af' },
  'Ventilation': { bg: '#d1fae5', accent: '#065f46', tagBg: '#d1fae5', tagText: '#065f46' },
  'Air Distribution': { bg: '#dcfce7', accent: '#166534', tagBg: '#dcfce7', tagText: '#166534' },
  'Clean Room': { bg: '#e0f2fe', accent: '#075985', tagBg: '#e0f2fe', tagText: '#075985' },
  'Acoustic': { bg: '#fef9c3', accent: '#854d0e', tagBg: '#fef9c3', tagText: '#854d0e' },
  'Fabrication': { bg: '#fed7aa', accent: '#9a3412', tagBg: '#fed7aa', tagText: '#9a3412' },
};

// ─── Types ────────────────────────────────────────────────────────────────────

interface Product {
  id: string;
  name: string;
  description: string;
  category: ProductCategory;
  image: string;
  specs?: string[];   // add specs to your products data; fallback shown if missing
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function Products({ onNavigate }: ProductsProps) {
  const [productView, setProductView] = useState<ProductView>('categories');
  const [activeCategory, setActiveCategory] = useState<ProductCategory | null>(null);
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  // lock scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = modalOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [modalOpen]);

  function openCategory(cat: ProductCategory) {
    setActiveCategory(cat);
    setProductView('listing');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function openProduct(product: Product) {
    setActiveProduct(product);
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
    setTimeout(() => setActiveProduct(null), 300);
  }

  function goBackToCategories() {
    setProductView('categories');
    setActiveCategory(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const catProducts = activeCategory
    ? (PRODUCTS as Product[]).filter((p) => p.category === activeCategory)
    : [];
    

  return (
    <div>
      {/* ── Page Header ── */}
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
          {/* Breadcrumb */}
          {productView === 'listing' && activeCategory && (
            <button
              onClick={goBackToCategories}
              className="flex items-center gap-2 text-teal-brand text-sm font-semibold mb-4 hover:opacity-80 transition-opacity"
            >
              <ArrowLeft className="w-4 h-4" />
              All Categories
            </button>
          )}
          <p className="text-teal-brand font-semibold text-sm uppercase tracking-widest mb-3">
            Our Catalogue
          </p>
          {productView === 'categories' ? (
            <>
              <h1 className="text-5xl font-extrabold text-white mb-4">Products</h1>
              <p className="text-gray-300 text-lg max-w-2xl">
                30+ precision-engineered HVAC products across six categories — manufactured
                in-house at our Bahadurgarh facility.
              </p>
            </>
          ) : (
            <>
              <div className="flex items-center gap-4">
                {activeCategory && (() => {
                  const Icon = CATEGORY_ICONS[activeCategory];
                  const meta = CATEGORY_META[activeCategory];
                  return (
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: meta.bg }}
                    >
                      <Icon className="w-6 h-6" style={{ color: meta.accent }} />
                    </div>
                  );
                })()}
                <div>
                  <h1 className="text-4xl font-extrabold text-white mb-1">{activeCategory}</h1>
                  <p className="text-gray-300 text-sm">{catProducts.length} products</p>
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      {/* ── Category Grid ── */}
      {productView === 'categories' && (
        <section className="bg-gray-50 py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-sm text-gray-500 mb-8">
              Select a category to explore products
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {CATEGORIES.map((cat: ProductCategory) => {
                const Icon = CATEGORY_ICONS[cat];
                const meta = CATEGORY_META[cat];
                const count = (PRODUCTS as Product[]).filter((p) => p.category === cat).length;
                return (
                  <button
                    key={cat}
                    onClick={() => openCategory(cat)}
                    className="group text-left bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                  >
                    {/* Thumbnail area — swap the div below with <img> when you have real images */}
                    <div
                      className="h-44 flex items-center justify-center relative overflow-hidden"
                      style={{ background: meta.bg }}
                    >
                      {/* If you have a real image: */}
                      {/* <img src={meta.thumb} alt={cat} className="w-full h-full object-cover" /> */}

                      {/* Placeholder icon (remove once real images are added) */}
                      <Icon
                        className="w-20 h-20 opacity-20 absolute"
                        style={{ color: meta.accent }}
                      />
                      {/* <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center z-10 shadow-md group-hover:scale-110 transition-transform duration-300"
                        style={{ background: 'white' }}
                      >
                        <Icon className="w-8 h-8" style={{ color: meta.accent }} />
                      </div> */}

                      {/* Category pill */}
                      <span
                        className="absolute top-3 right-3 text-xs font-bold px-3 py-1 rounded-full"
                        style={{ background: 'rgba(255,255,255,0.85)', color: meta.accent }}
                      >
                        {count} products
                      </span>
                    </div>

                    {/* Card body */}
                    <div className="p-5">
                      <h3 className="text-base font-bold text-navy-brand mb-1 group-hover:text-teal-brand transition-colors">
                        {cat}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-2">
                        {getCategoryDesc(cat)}
                      </p>
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-teal-brand">
                        Explore products <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ── Product Listing ── */}
      {productView === 'listing' && activeCategory && (
        <section className="bg-gray-50 py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {catProducts.map((product) => {
                //const Icon = CATEGORY_ICONS[product.category];
                const Icon = product.image;
                const meta = CATEGORY_META[product.category];
                return (
                  <button
                    key={product.id}
                    onClick={() => openProduct(product)}
                    className="group text-left bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                  >
                    {/* Top accent bar */}
                    <div className="h-1.5 w-full" style={{ background: meta.accent }} />
                    <div className="p-6 flex flex-col h-full">
                      <div className="flex items-start justify-between mb-4">
                        <img src={Icon} alt={product.name} className="w-full h-full object-cover" />
                        {/* <div
                          className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-300"
                          style={{
                            background: `${meta.bg}`,
                          }}
                        >
                          <Icon className="w-5 h-5" style={{ color: meta.accent }} />
                        </div> */}
                      </div>
                      <div className="flex items-start justify-end mb-4">
                        <span
                          className="text-xs font-semibold px-2.5 py-1 rounded-full border"
                          style={{
                            background: meta.tagBg,
                            color: meta.tagText,
                            borderColor: meta.tagBg,
                          }}
                        >
                          {product.category}
                        </span>
                      </div>
                      
                      <h3 className="text-base font-bold text-navy-brand mb-2 leading-snug group-hover:text-teal-brand transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 mb-4">
                        {product.description}
                      </p>
                      <div className="mt-auto">
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-teal-brand">
                        View details <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ── Spec CTA ── */}
      <section
        className="py-16"
        style={{ background: 'linear-gradient(135deg, #1a3c5e 0%, #112840 100%)' }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need custom specifications or sizing?
          </h2>
          <p className="text-gray-300 mb-8">
            Our engineering team can design and manufacture bespoke HVAC equipment to
            your exact requirements.
          </p>
          <button
            onClick={() => { onNavigate('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="bg-teal-brand hover:bg-teal-dark text-white font-semibold px-8 py-4 rounded transition-all duration-200 inline-flex items-center gap-2"
          >
            Send Technical Enquiry
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* ── Product Detail Modal ── */}
      {modalOpen && activeProduct && (
        <ProductModal
          product={activeProduct}
          onClose={closeModal}
          onEnquire={() => {
            closeModal();
            onNavigate('contact');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      )}
    </div>
  );
}

// ─── Product Modal ─────────────────────────────────────────────────────────────

function ProductModal({
  product,
  onClose,
  onEnquire,
}: {
  product: Product;
  onClose: () => void;
  onEnquire: () => void;
}) {
  const Icon = CATEGORY_ICONS[product.category];
  const meta = CATEGORY_META[product.category];

  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(17, 40, 64, 0.6)', backdropFilter: 'blur(4px)' }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-modal"
        style={{ maxHeight: '90vh', overflowY: 'auto' }}
      >
        {/* Modal header */}
        <div
          className="px-6 pt-6 pb-5 relative"
          style={{ background: 'linear-gradient(135deg, #112840 0%, #1a3c5e 100%)' }}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-colors"
            style={{ background: 'rgba(255,255,255,0.15)', color: 'white' }}
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-start gap-4 pr-10">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: meta.bg }}
            >
              <Icon className="w-6 h-6" style={{ color: meta.accent }} />
            </div>
            <div>
              <span
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: '#00A0B0' }}
              >
                {product.category}
              </span>
              <h2 className="text-xl font-extrabold text-white mt-0.5 leading-snug">
                {product.name}
              </h2>
            </div>
          </div>
        </div>

        {/* Modal body */}
        <div className="px-6 py-6">
          {/* Overview */}
          <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
            Overview
          </h4>
          <p className="text-sm text-gray-600 leading-relaxed mb-6">
            {product.description}
          </p>

          {/* Specs */}
          {product.specs && product.specs.length > 0 && (
            <>
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                Key Specifications
              </h4>
              <div className="bg-gray-50 rounded-xl p-4 mb-6 space-y-2">
                {product.specs.map((spec, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-teal-brand flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">{spec}</span>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Actions */}
          <div className="flex gap-3">
            <button
              onClick={onEnquire}
              className="flex-1 bg-teal-brand hover:bg-teal-dark text-white font-semibold py-3 px-5 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
            >
              Enquire Now
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="px-5 py-3 rounded-lg border-2 border-gray-200 text-gray-500 font-semibold hover:border-gray-300 hover:text-gray-700 transition-colors duration-200"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function getCategoryDesc(cat: ProductCategory): string {
  const descs: Record<ProductCategory, string> = {
    'AC Equipment': 'Split units, chillers, AHUs and precision cooling systems for all building types.',
    'Ventilation': 'Fresh air units, ERVs, HRVs and fans for healthy indoor air quality.',
    'Air Distribution': 'Grilles, diffusers, VAV boxes and plenums for balanced airflow.',
    'Clean Room': 'FFUs, HEPA housings and laminar flow equipment for critical environments.',
    'Acoustic': 'Silencers, acoustic louvers and noise barriers for quiet HVAC operation.',
    'Fabrication': 'Custom GI ductwork, spiral ducts, plenums and sheet metal fabrication.',
  };
  return descs[cat];
}
