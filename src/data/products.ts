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
    id: 'ahu',
    name: 'Air Handling Unit (AHU)',
    description:
      'Double-skin AHUs engineered for precision air conditioning.',
    category: 'AC Equipment',
    image: '/images/products/ahu.png',
  },
  {
    id: 'fcu',
    name: 'Fan Coil Unit (FCU)',
    description:
      'Compact fan coil units for zoned climate control.',
    category: 'AC Equipment',
    image: '/images/products/fcu.png',
  },
  {
    id: 'cooling-coils',
    name: 'Cooling Coils',
    description:
      'High-efficiency chilled water and DX cooling coils.',
    category: 'AC Equipment',
    image: '/images/products/cooling-coils.png',
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
    name: 'Scrubber',
    description:
      'Industrial scrubbers for exhaust and pollution control.',
    category: 'Ventilation',
    image: '/images/products/scrubber.png',
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
    id: 'fan-accessories',
    name: 'Fan Accessories',
    description:
      'Accessories like guards, dampers, connectors, etc.',
    category: 'Ventilation',
    image: '/images/products/fan-accessories.png',
  },
  {
    id: 'big-industrial-fan',
    name: 'Big Industrial Fan',
    description:
      'Large HVLS fans for warehouses and factories.',
    category: 'Ventilation',
    image: '/images/products/industrial-fan.png',
  },

  // ================= Air Distribution =================
  {
    id: 'grills',
    name: 'Grills',
    description:
      'Aluminium and steel grills for airflow control.',
    category: 'Air Distribution',
    image: '/images/products/grill.png',
  },
  {
    id: 'diffusers',
    name: 'Diffusers',
    description:
      'Air diffusers for uniform airflow distribution.',
    category: 'Air Distribution',
    image: '/images/products/diffuser.png',
  },
  {
    id: 'dampers',
    name: 'Dampers',
    description:
      'Volume and fire dampers for airflow regulation.',
    category: 'Air Distribution',
    image: '/images/products/damper.png',
  },
  {
    id: 'louvers',
    name: 'Louvers',
    description:
      'Weather-resistant louvers for ventilation.',
    category: 'Air Distribution',
    image: '/images/products/louver.png',
  },
  {
    id: 'bird-screen',
    name: 'Bird Screen',
    description:
      'Protective screens for HVAC openings.',
    category: 'Air Distribution',
    image: '/images/products/bird-screen.png',
  },

  // ================= Clean Room =================
  {
    id: 'laf',
    name: 'Laminar Air Flow Unit',
    description:
      'Clean airflow units for sterile environments.',
    category: 'Clean Room',
    image: '/images/products/ffu.png',
  },
  {
    id: 'guided-airflow',
    name: 'Guided Air Flow Unit',
    description:
      'Controlled airflow systems for clean rooms.',
    category: 'Clean Room',
    image: '/images/products/ffu.png',
  },
  {
    id: 'hepa-housing',
    name: 'HEPA Filter Housing',
    description:
      'High-efficiency filtration systems.',
    category: 'Clean Room',
    image: '/images/products/hepa.png',
  },
  {
    id: 'ra-riser',
    name: 'RA Riser',
    description:
      'Return air systems for clean environments.',
    category: 'Clean Room',
    image: '/images/products/riser.png',
  },

  // ================= Acoustic =================
  {
    id: 'fan-silencers',
    name: 'Fan Silencers',
    description:
      'Noise reduction silencers for HVAC systems.',
    category: 'Acoustic',
    image: '/images/products/attenuator.png',
  },
  {
    id: 'duct-silencers',
    name: 'Duct Silencers',
    description:
      'Noise control for duct systems.',
    category: 'Acoustic',
    image: '/images/products/attenuator.png',
  },
  {
    id: 'acoustic-louvers',
    name: 'Acoustic Louvers',
    description:
      'Louvers with sound attenuation.',
    category: 'Acoustic',
    image: '/images/products/acoustic-louver.png',
  },
  {
    id: 'acoustic-doors',
    name: 'Acoustic Doors',
    description:
      'Soundproof doors for industrial use.',
    category: 'Acoustic',
    image: '/images/products/acoustic-door.png',
  },
  {
    id: 'drum-tester',
    name: 'Drum Tester Enclosure',
    description:
      'Acoustic enclosures for testing environments.',
    category: 'Acoustic',
    image: '/images/products/enclosure.png',
  },
  {
    id: 'fuel-filling',
    name: 'Fuel Filling Enclosure',
    description:
      'Noise-controlled enclosures for fuel systems.',
    category: 'Acoustic',
    image: '/images/products/enclosure.png',
  },

  // ================= Fabrication =================
  {
    id: 'high-temp-bellows',
    name: 'High Temperature Bellows',
    description:
      'Flexible joints for high-temperature ducts.',
    category: 'Fabrication',
    image: '/images/products/duct.png',
  },
  {
    id: 'high-temp-dampers',
    name: 'High Temp Dampers',
    description:
      'High-performance industrial dampers.',
    category: 'Fabrication',
    image: '/images/products/damper.png',
  },
  {
    id: 'water-shower',
    name: 'Water Shower Chambers',
    description:
      'Pre-cooling and filtration chambers.',
    category: 'Fabrication',
    image: '/images/products/duct.png',
  },
  {
    id: 'kitchen-exhaust',
    name: 'Kitchen Exhaust Ducts',
    description:
      'Heavy-duty kitchen ventilation systems.',
    category: 'Fabrication',
    image: '/images/products/kitchen-exhaust.png',
  },
  {
    id: 'ms-frames',
    name: 'MS Base Frames & Tanks',
    description:
      'Custom fabrication structures.',
    category: 'Fabrication',
    image: '/images/products/tank.png',
  },
];