export type ProductCategory = 'AC Equipment' | 'Ventilation' | 'Air Distribution' | 'Clean Room' | 'Acoustic' | 'Fabrication';

export interface Product {
  id: string;
  name: string;
  description: string;
  category: ProductCategory;
  image: string;
}

export const PRODUCTS: Product[] = [
  // ================= AC Equipment =================
  {
    id: 'ahu-floor',
    name: 'Floor Mounted Air Handling Unit (AHU)',
    description:
      'Heavy-duty floor-mounted AHUs designed for efficient air circulation in large commercial and industrial spaces.',
    category: 'AC Equipment',
    image: '/images/products/ahu.webp',
  },
  {
    id: 'fcu',
    name: 'Fan Coil Unit (FCU)',
    description:
      'Compact fan coil units ideal for zoned temperature control in residential and commercial environments.',
    category: 'AC Equipment',
    image: '/images/products/fcu.png',
  },
  {
    id: 'cooling-coils',
    name: 'Cooling Coils',
    description:
      'High-performance cooling coils engineered for effective heat exchange in HVAC systems.',
    category: 'AC Equipment',
    image: '/images/products/cooling-coils.png',
  },
  {
    id: 'ahu-ceiling',
    name: 'Ceiling Suspended Air Handling Unit (AHU)',
    description:
      'Space-efficient ceiling-mounted AHUs suitable for areas with limited floor space.',
    category: 'AC Equipment',
    image: '/images/products/ceiling-suspended.png',
  },
  {
    id: 'ahu-vertical',
    name: 'Vertical Air Handling Unit (AHU)',
    description:
      'Vertical AHUs designed for compact installation while maintaining high airflow efficiency.',
    category: 'AC Equipment',
    image: '/images/products/vertical-ahu.png',
  },
  {
    id: 'decu',
    name: 'Direct Evaporative Cooling Unit (DECU)',
    description:
      'Eco-friendly cooling units that use evaporative technology for energy-efficient temperature control.',
    category: 'AC Equipment',
    image: '/images/products/decu.png',
  },
  {
    id: 'dry-scrubber',
    name: 'Dry Scrubber',
    description:
      'Air pollution control system that removes contaminants using dry chemical processes.',
    category: 'AC Equipment',
    image: '/images/products/dry.png',
  },
  {
    id: 'wet-scrubber',
    name: 'Wet Scrubber',
    description:
      'Effective air cleaning system that removes pollutants using liquid-based filtration.',
    category: 'AC Equipment',
    image: '/images/products/wet.png',
  },
  {
    id: 'ducts',
    name: 'Ducts',
    description:
      'Durable air ducts designed for efficient airflow distribution in HVAC systems.',
    category: 'AC Equipment',
    image: '/images/products/ducts.png',
  },
  {
    id: 'exhaust-unit',
    name: 'Exhaust Unit',
    description:
      'High-performance exhaust units for removing stale air, fumes, and contaminants from indoor spaces.',
    category: 'AC Equipment',
    image: '/images/products/exhaust-unit.png',
  },
  {
    id: 'ventilation-unit',
    name: 'Ventilation Unit',
    description:
      'Ventilation systems that ensure a continuous supply of fresh air while maintaining indoor air quality.',
    category: 'AC Equipment',
    image: '/images/products/ventilation-unit.png',
  },
  {
    id: 'cooling-pads',
    name: 'Cooling Pads',
    description:
      'Highly absorbent cooling pads designed for efficient evaporative cooling in air systems.',
    category: 'AC Equipment',
    image: '/images/products/cooling-pad.png',
  },

  // ================= Ventilation =================
  {
    id: 'air-washer',
    name: 'Air Washer',
    description:
      'Industrial air washers for humidification and cooling.',
    category: 'Ventilation',
    image: '/images/products/air-washer.png',
  },
  {
    id: 'scrubber',
    name: 'Two Stage Air Washer',
    description:
      'Industrial scrubbers for exhaust and pollution control.',
    category: 'Ventilation',
    image: '/images/products/two-stage-washer.png',
  },
  {
    id: 'fan-section',
    name: 'Fan Section / Exhaust Unit',
    description:
      'High-performance exhaust and ventilation units.',
    category: 'Ventilation',
    image: '/images/products/fan-section.png',
  },
  {
    id: 'axial-fan',
    name: 'Axial Flow Fan',
    description:
      'Heavy-duty axial fans for industrial ventilation.',
    category: 'Ventilation',
    image: '/images/products/axial-fan.png',
  },
  {
    id: 'big-industrial-fan',
    name: 'Big Industrial Fan',
    description:
      'Large HVLS fans for warehouses and factories.',
    category: 'Ventilation',
    image: '/images/products/big-smart-fan.webp',
  },

  // ================= Air Distribution =================
  {
    id: 'grills',
    name: 'Grills and Diffusers',
    description:
      'Aluminium and steel grills for airflow control.',
    category: 'Air Distribution',
    image: '/images/products//grills.webp',
  },
  {
    id: 'dampers',
    name: 'Dampers',
    description:
      'Volume and fire dampers for airflow regulation.',
    category: 'Air Distribution',
    image: '/images/products/dampers.jpeg',
  },
  {
    id: 'louvers',
    name: 'Louvers',
    description:
      'Weather-resistant louvers for ventilation.',
    category: 'Air Distribution',
    image: '/images/products/louvers.jpeg',
  },
  {
    id: 'bird-screen',
    name: 'Bird Screen',
    description:
      'Protective screens for HVAC openings.',
    category: 'Air Distribution',
    image: '/images/products/bird-screen.webp',
  },

  // ================= Clean Room =================
  
  {
    id: 'hepa-housing',
    name: 'HEPA Filter Housing',
    description:
      'High-efficiency filtration systems.',
    category: 'Clean Room',
    image: '/images/products/hepa-filter-housing.jpeg',
  },
  {
    id: 'ra-riser',
    name: 'RA Riser',
    description:
      'Return air systems for clean environments.',
    category: 'Clean Room',
    image: '/images/products/riser.jpeg',
  },

  // ================= Acoustic =================
  {
    id: 'fan-silencers',
    name: 'Fan Silencers',
    description:
      'Noise reduction silencers for HVAC systems.',
    category: 'Acoustic',
    image: '/images/products/fan-silencers.jpg',
  },
  {
    id: 'duct-silencers',
    name: 'Duct Silencers',
    description:
      'Noise control for duct systems.',
    category: 'Acoustic',
    image: '/images/products/duct-silencers.jpeg',
  },
  {
    id: 'duct-collectors',
    name: 'Duct Collectors',
    description:
      'Noise control for duct systems.',
    category: 'Acoustic',
    image: '/images/products/dust-collector.png',
  },


  // ================= Fabrication =================
  
  {
    id: 'kitchen-exhaust',
    name: 'Kitchen Exhaust Ducts',
    description:
      'Heavy-duty kitchen ventilation systems.',
    category: 'Fabrication',
    image: '/images/products/kitchen.jpeg',
  }
];