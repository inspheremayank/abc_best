import { useState } from 'react';
import {
  Thermometer,
  Wind,
  Layers,
  ShieldCheck,
  Volume2,
  Wrench,
  ArrowRight,
} from 'lucide-react';
import { PRODUCTS, CATEGORIES, type ProductCategory } from '../data/products';

type Page = 'home' | 'about' | 'products' | 'projects' | 'contact';

interface ProductsProps {
  onNavigate: (page: Page) => void;
}

const CATEGORY_ICONS: Record<ProductCategory, React.ElementType> = {
  'AC Equipment': Thermometer,
  'Ventilation': Wind,
  'Air Distribution': Layers,
  'Clean Room': ShieldCheck,
  'Acoustic': Volume2,
  'Fabrication': Wrench,
};

const CATEGORY_COLORS: Record<ProductCategory, string> = {
  'AC Equipment': 'bg-blue-50 text-blue-700 border-blue-200',
  'Ventilation': 'bg-teal-50 text-teal-700 border-teal-200',
  'Air Distribution': 'bg-green-50 text-green-700 border-green-200',
  'Clean Room': 'bg-sky-50 text-sky-700 border-sky-200',
  'Acoustic': 'bg-amber-50 text-amber-700 border-amber-200',
  'Fabrication': 'bg-orange-50 text-orange-700 border-orange-200',
};

export default function Products({ onNavigate }: ProductsProps) {
  const [activeCategory, setActiveCategory] = useState<ProductCategory | 'All'>('All');

  const filtered =
    activeCategory === 'All'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

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
            Our Catalogue
          </p>
          <h1 className="text-5xl font-extrabold text-white mb-4">Products</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            30+ precision-engineered HVAC products across six categories — manufactured
            in-house at our Bahadurgarh facility.
          </p>
        </div>
      </section>

      {/* Category Filters */}
      <section className="bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto py-4 scrollbar-hide">
            <button
              onClick={() => setActiveCategory('All')}
              className={`flex-shrink-0 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                activeCategory === 'All'
                  ? 'bg-navy-brand text-white shadow-sm'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              All Products ({PRODUCTS.length})
            </button>
            {CATEGORIES.map((cat) => {
              const Icon = CATEGORY_ICONS[cat];
              const count = PRODUCTS.filter((p) => p.category === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`flex-shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    activeCategory === cat
                      ? 'bg-teal-brand text-white shadow-sm'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {cat} ({count})
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category heading when filtered */}
          {activeCategory !== 'All' && (
            <div className="mb-8 flex items-center gap-3">
              {(() => {
                const Icon = CATEGORY_ICONS[activeCategory];
                return (
                  <div className="w-10 h-10 bg-teal-brand rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                );
              })()}
              <div>
                <h2 className="text-2xl font-bold text-navy-brand">{activeCategory}</h2>
                <p className="text-sm text-gray-500">{filtered.length} products</p>
              </div>
            </div>
          )}

          {activeCategory === 'All' ? (
            /* Grouped view when "All" is selected */
            <div className="space-y-14">
              {CATEGORIES.map((cat) => {
                const Icon = CATEGORY_ICONS[cat];
                const catProducts = PRODUCTS.filter((p) => p.category === cat);
                return (
                  <div key={cat}>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-teal-brand rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-xl font-bold text-navy-brand">{cat}</h2>
                      </div>
                      <button
                        onClick={() => setActiveCategory(cat)}
                        className="text-sm text-teal-brand font-semibold hover:underline hidden sm:flex items-center gap-1"
                      >
                        View all <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                      {catProducts.map((product) => (
                        <ProductCard
                          key={product.id}
                          product={product}
                          onEnquire={() => {
                            onNavigate('contact');
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }}
                        />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            /* Flat grid when a category is selected */
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onEnquire={() => {
                    onNavigate('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Spec CTA */}
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
            onClick={() => {
              onNavigate('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="bg-teal-brand hover:bg-teal-dark text-white font-semibold px-8 py-4 rounded transition-all duration-200 inline-flex items-center gap-2"
          >
            Send Technical Enquiry
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}

function ProductCard({
  product,
  onEnquire,
}: {
  product: { id: string; name: string; description: string; category: ProductCategory };
  onEnquire: () => void;
}) {
  const Icon = CATEGORY_ICONS[product.category];
  const colorClass = CATEGORY_COLORS[product.category];

  return (
    <div className="group bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col">
      <div className="p-6 flex-1">
        <div className="flex items-start justify-between mb-4">
          <div className="w-10 h-10 bg-teal-brand/10 group-hover:bg-teal-brand rounded-lg flex items-center justify-center transition-colors duration-300 flex-shrink-0">
            <Icon className="w-5 h-5 text-teal-brand group-hover:text-white transition-colors duration-300" />
          </div>
          <span
            className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${colorClass}`}
          >
            {product.category}
          </span>
        </div>
        <h3 className="text-base font-bold text-navy-brand mb-2 leading-snug group-hover:text-teal-brand transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed">{product.description}</p>
      </div>
      <div className="px-6 pb-5">
        <button
          onClick={onEnquire}
          className="w-full flex items-center justify-center gap-2 border-2 border-teal-brand text-teal-brand hover:bg-teal-brand hover:text-white text-sm font-semibold py-2.5 rounded-lg transition-all duration-200"
        >
          Enquire Now
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
