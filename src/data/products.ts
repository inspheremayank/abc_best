export type ProductCategory =
  | 'AC Equipment'
  | 'Ventilation'
  | 'Air Distribution'
  | 'Clean Room'
  | 'Acoustic'
  | 'Fabrication';

export interface Product {
  id: string;
  name: string;
  description: string;
  category: ProductCategory;
}

export const CATEGORIES: ProductCategory[] = [
  'AC Equipment',
  'Ventilation',
  'Air Distribution',
  'Clean Room',
  'Acoustic',
  'Fabrication',
];

export const PRODUCTS: Product[] = [
  // AC Equipment
  {
    id: 'ahu',
    name: 'Air Handling Unit (AHU)',
    description:
      'Double-skin AHUs engineered for precision air conditioning, available in custom capacities with factory-tested performance guarantees.',
    category: 'AC Equipment',
  },
  {
    id: 'fcu',
    name: 'Fan Coil Unit (FCU)',
    description:
      'Compact fan coil units for zoned climate control in commercial buildings, hospitals, and hotels. Horizontal and vertical configurations.',
    category: 'AC Equipment',
  },
  {
    id: 'cooling-coils',
    name: 'Cooling Coils',
    description:
      'High-efficiency chilled water and DX cooling coils fabricated from copper tubes and aluminium fins for maximum thermal performance.',
    category: 'AC Equipment',
  },

  // Ventilation
  {
    id: 'air-washer',
    name: 'Air Washer',
    description:
      'Industrial air washers for humidification, cooling, and filtration. Ideal for textile mills, pharmaceutical plants, and process industries.',
    category: 'Ventilation',
  },
  {
    id: 'scrubber',
    name: 'Scrubber',
    description:
      'Wet and dry scrubbers for industrial exhaust treatment, fume extraction, and odour control across manufacturing and chemical plants.',
    category: 'Ventilation',
  },
  {
    id: 'fan-section',
    name: 'Fan Section / Exhaust Unit',
    description:
      'Robust fan sections and exhaust units designed for high-volume air movement in industrial, commercial, and HVAC applications.',
    category: 'Ventilation',
  },
  {
    id: 'axial-fan',
    name: 'Axial Flow Fan',
    description:
      'Heavy-duty axial flow fans for process cooling, ventilation shafts, and tunnel exhausts. Available in MS, SS, and GI construction.',
    category: 'Ventilation',
  },
  {
    id: 'fan-accessories',
    name: 'Fan Accessories',
    description:
      'Complete range of fan accessories including inlet cones, discharge boxes, flexible connections, vibration isolators, and guards.',
    category: 'Ventilation',
  },
  {
    id: 'big-industrial-fan',
    name: 'Big Industrial Fan (up to 6.5m dia)',
    description:
      'Large-diameter HVLS industrial fans up to 6.5 metres for warehouses, aircraft hangars, and large industrial spaces.',
    category: 'Ventilation',
  },

  // Air Distribution
  {
    id: 'grills',
    name: 'Grills (SS / AL / MS)',
    description:
      'Extruded aluminium, stainless steel, and mild steel grills for supply, return, and transfer air applications. Custom sizes available.',
    category: 'Air Distribution',
  },
  {
    id: 'diffusers',
    name: 'Diffusers',
    description:
      'Square, round, and linear diffusers for uniform air distribution in false ceilings. Available with adjustable deflectors for flexible throw patterns.',
    category: 'Air Distribution',
  },
  {
    id: 'dampers',
    name: 'Dampers (SS / AL / MS)',
    description:
      'Volume control, fire, smoke, and multi-leaf dampers fabricated in stainless steel, aluminium, and mild steel. Motorized options available.',
    category: 'Air Distribution',
  },
  {
    id: 'louvers',
    name: 'Louvers (SS / AL / MS)',
    description:
      'Fixed and operable louvers for fresh air intake, exhaust discharge, and architectural screening. Weatherproof and corrosion-resistant.',
    category: 'Air Distribution',
  },
  {
    id: 'bird-screen',
    name: 'Bird Screen',
    description:
      'Heavy-gauge galvanised or stainless steel bird screens to protect HVAC intakes and exhausts from birds, debris, and insects.',
    category: 'Air Distribution',
  },

  // Clean Room
  {
    id: 'laf',
    name: 'Laminar Air Flow Unit',
    description:
      'Horizontal and vertical LAF units providing ISO Class 5 unidirectional airflow for pharmaceutical production and critical processes.',
    category: 'Clean Room',
  },
  {
    id: 'guided-airflow',
    name: 'Guided Air Flow Unit',
    description:
      'Guided airflow units delivering controlled, contamination-free environments for sensitive manufacturing and research applications.',
    category: 'Clean Room',
  },
  {
    id: 'hepa-housing',
    name: 'HEPA Filter Housing',
    description:
      'Leak-proof HEPA filter housings for terminal filtration in clean rooms, operating theatres, and pharmaceutical filling lines.',
    category: 'Clean Room',
  },
  {
    id: 'ra-riser',
    name: 'RA Riser',
    description:
      'Return air risers for clean room systems, providing efficient and balanced return air paths to maintain positive pressure differentials.',
    category: 'Clean Room',
  },

  // Acoustic
  {
    id: 'fan-silencers',
    name: 'Fan Silencers',
    description:
      'Inline and plenum-type fan silencers for attenuation of fan noise in HVAC ducts, generator rooms, and industrial exhaust systems.',
    category: 'Acoustic',
  },
  {
    id: 'duct-silencers',
    name: 'Duct Silencers',
    description:
      'Rectangular and circular duct silencers (splitter type) for broad-spectrum noise reduction in commercial HVAC installations.',
    category: 'Acoustic',
  },
  {
    id: 'acoustic-louvers',
    name: 'Acoustic Louvers',
    description:
      'Weather-resistant acoustic louvers combining ventilation with sound attenuation for plant rooms, substations, and machinery enclosures.',
    category: 'Acoustic',
  },
  {
    id: 'acoustic-doors',
    name: 'Acoustic Doors',
    description:
      'Heavy-duty acoustic doors with STC ratings up to 45 dB for generator enclosures, testing facilities, and noise-sensitive environments.',
    category: 'Acoustic',
  },
  {
    id: 'drum-tester',
    name: 'Drum Tester Enclosure',
    description:
      'Custom-engineered acoustic enclosures for engine drum testing and high-noise industrial testing environments.',
    category: 'Acoustic',
  },
  {
    id: 'fuel-filling',
    name: 'Fuel Filling Enclosure',
    description:
      'Secure, acoustically treated fuel filling enclosures for generator sets and industrial diesel storage in noise-restricted zones.',
    category: 'Acoustic',
  },

  // Fabrication
  {
    id: 'high-temp-bellows',
    name: 'High Temperature Bellows',
    description:
      'Flexible expansion joints and bellows for high-temperature duct systems, boiler exhausts, and industrial process piping.',
    category: 'Fabrication',
  },
  {
    id: 'high-temp-dampers',
    name: 'High Temp Low Leakage Dampers',
    description:
      'Precision-engineered dampers rated for elevated temperatures with ultra-low leakage for critical isolation in power and process plants.',
    category: 'Fabrication',
  },
  {
    id: 'water-shower',
    name: 'Water Shower Chambers',
    description:
      'Industrial water shower and pre-cooling chambers for inlet air conditioning and pre-treatment in gas turbine and process applications.',
    category: 'Fabrication',
  },
  {
    id: 'kitchen-exhaust',
    name: 'Kitchen Exhaust Ducts (MS/SS)',
    description:
      'Heavy-duty kitchen exhaust ductwork in mild steel and stainless steel for commercial kitchens, hotels, and restaurant chains.',
    category: 'Fabrication',
  },
  {
    id: 'ms-frames',
    name: 'MS Base Frames & Tanks',
    description:
      'Custom mild steel base frames, skids, and tanks for HVAC equipment mounting, day tanks, and general industrial fabrication.',
    category: 'Fabrication',
  },
];
